import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Tweet } from '../../tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Input() retweet: Tweet;
  @Output() action = new EventEmitter<{ property: string, tweet: Tweet }>();
  
  constructor() { }

  ngOnInit() {
  }

  hasPhoto(tweet: Tweet) {
    if (tweet.entities.media
      && tweet.entities.media.length
      && tweet.entities.media[0].type === 'photo') {
      return true;
    }
    return false;
  }

  toggleAction(property: 'favorite' | 'retweet') {
    this.action.emit({ property, tweet: this.tweet });
  }

}
