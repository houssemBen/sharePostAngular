import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shareTweetAngular';
  user: any = {};
  tweetText: any = ""
  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.user().subscribe(user => this.user = user.data);
  }

  tweet() {
    this.twitter.tweet({ status: this.tweetText }).subscribe(() => {
      this.tweetText = ''
      console.log('success')
    },
      err => {
        console.log(err);
      })
  }
}
