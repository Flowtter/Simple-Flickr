import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.scss']
})
export class PhotoInfoComponent implements OnInit {
  @Input() path = "/assets/placeholder.jpg";
  @Input() currentComment = "wow, such empty...";
  @Input() currentCommentAuthor = "Nobody";
  @Input() show = false;
  @Input() allComments: any
  @Input() nbComments = 0;

  @Input() author = "A";
  @Input() photoName = "b";

  commentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.show = false;
  }

  next(right: boolean) {
    if (this.nbComments == 0)
      return
    if (right)
      this.commentIndex = (this.commentIndex + 1) % this.nbComments;
    else
      this.commentIndex = (this.commentIndex - 1 + this.nbComments) % this.nbComments;
    console.log(this.commentIndex)
    var comment = this.allComments[this.commentIndex];
    console.log(comment)
    this.currentComment = comment["_content"];
    this.currentCommentAuthor = comment["authorname"];

  }



}
