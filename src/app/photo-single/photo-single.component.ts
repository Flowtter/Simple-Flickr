import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-single',
  templateUrl: './photo-single.component.html',
  styleUrls: ['./photo-single.component.scss']
})
export class PhotoSingleComponent implements OnInit {
  @Input() path = "/assets/placeholder.jpg";
  @Input() apikey = "";

  allComments: any
  nbComments = 0;
  currentComment = "";
  currentCommentAuthor = "";

  author = "A";
  photoName = "b";

  showInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  async info() {
    this.showInfo = false;
    if (this.path == "/assets/placeholder.jpg") {
      return;
    }

    const slash = this.path.split("/");
    const id = slash[slash.length - 1].split("_")[0];

    try {
      var q = "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + this.apikey + "&photo_id=" + id + "&format=json&nojsoncallback=1"
      const data = await fetch(q);
      if (data.status != 200) {
        throw new Error("data code is " + data.status);
      }

      var json = await data.json();
      if (json["stat"] != "ok") {
        throw new Error("stat is not ok " + json["stat"]);
      }
      console.log(json);
      this.author = json["photo"]["owner"]["username"];
      this.photoName = json["photo"]["title"]["_content"];
    }
    catch (err) {
      alert("Error fetching: " + err)
      return;
    }


    var q = "https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=" + this.apikey + "&photo_id=" + id + "&format=json&nojsoncallback=1"

    // TESTING ONLY: a photo with a lot of comments
    // q = "https://www.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=" + this.apikey + "&photo_id=52091119615&format=json&nojsoncallback=1";
    console.log(q);
    //
    try {
      const data = await fetch(q);
      if (data.status != 200) {
        throw new Error("data code is " + data.status);
      }

      var json = await data.json();
      if (json["stat"] != "ok") {
        throw new Error("stat is not ok " + json["stat"]);
      }
    }
    catch (err) {
      alert("Error fetching: " + err)
      return;
    }

    this.showInfo = true;
    if (json["comments"]["comment"] == undefined) {
      this.allComments = Array();
      this.nbComments = 0;
      this.currentComment = "wow, such empty...";
      this.currentCommentAuthor = "Nobody";
      return
    }
    else
      this.nbComments = json["comments"]["comment"].length;

    this.allComments = json["comments"]["comment"];
    var comment = json["comments"]["comment"]["0"];
    this.currentComment = comment["_content"];
    this.currentCommentAuthor = comment["authorname"];
    console.log(this.allComments)
  }

}
