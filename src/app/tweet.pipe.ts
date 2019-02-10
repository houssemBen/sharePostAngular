import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from './tweet.model';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'tweet'
})
export class TweetPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(tweet: Tweet, args?: any): any {
    let text = this.sanitizer.sanitize(1,tweet.full_text);

    if (tweet.entities.user_mentions) {
      tweet.entities.user_mentions.forEach(mention => {
        text = text.replace(new RegExp(`@${mention.screen_name}`, 'gi'), `<a href="https://twitter.com/${mention.screen_name}" target="_blank">@${mention.screen_name}</a>`);
      });
    }

    if (tweet.entities.urls) {
      tweet.entities.urls.forEach(url => {
        text = text.replace(url.url, `<a href="${url.url}" target="_blank">${url.display_url}</a>`);
      });
    }

    if (tweet.entities.media) {
      tweet.entities.media.forEach(url => {
        text = text.replace(url.url, '');
      });
    }

    text = text.replace(/\n/gm, '<br />');
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
