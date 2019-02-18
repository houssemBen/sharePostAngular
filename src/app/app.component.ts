import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TweeterModalComponent } from './tweeter-modal/tweeter-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shareTweetAngular';
  user: any = {};
  tweetText: any = ""
  constructor(private twitter: TwitterService,public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TweeterModalComponent, {
      data: {name: 'this.name', animal: 'this.animal'},
      panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

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
