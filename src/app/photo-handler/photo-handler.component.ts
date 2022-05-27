import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-handler',
  templateUrl: './photo-handler.component.html',
  styleUrls: ['./photo-handler.component.scss']
})
export class PhotoHandlerComponent implements OnInit {
  apikey: any;
  search: any;
  allPhotos: any;
  photosIndex: number = 0;
  photosByPage = 8;
  currentPhotos = Array(this.photosByPage).fill("/assets/placeholder.jpg");

  showMore = false;

  additionalProperties = "";

  constructor() { }

  ngOnInit(): void {
  }

  // async to block fetch queries
  async query() {
    if (this.apikey == undefined || this.search == undefined) {
      alert('Please provide a valid query');
    }
    var q = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="
      + this.apikey + "&tags=" + this.search.replace(" ", "+") + "&format=json&nojsoncallback=1"
      + this.additionalProperties;
    console.log(q);
    // Why am I using promise and not observable
    // The biggest difference is that Promises won’t change their value once they have been fulfilled.
    try {
      const data = await fetch(q);
      if (data.status != 200) {
        throw new Error("data code is " + data.status);
      }

      var json = await data.json();
      if (json["stat"] != "ok") {
        throw new Error("stat is not ok " + json["stat"]);
      }
      this.allPhotos = json["photos"];
      if (this.allPhotos["photo"].length < this.photosByPage) {
        if (this.allPhotos["photo"].length == 0)
          throw new Error("no photo corresponding to this query");
        throw new Error("not enough photo corresponding to this query");
      }
    }
    catch (err) {
      alert("Error fetching: " + err)
      return;
    }

    this.photosIndex = 0;
    for (var i = 0; i < this.photosByPage; i++) {
      const image = json["photos"]["photo"][i];
      const image_q = "https://live.staticflickr.com/"
        + image["server"] + "/"
        + image["id"] + "_"
        + image["secret"] + ".jpg"
      this.currentPhotos[i] = image_q;
    }
    console.log(this.currentPhotos);
  }

  next(right: boolean) {
    if (this.allPhotos == undefined)
      return;
    const l = this.allPhotos["photo"].length;
    if (right)
      this.photosIndex = (this.photosIndex + 1 * this.photosByPage) % l;
    else
      this.photosIndex = (this.photosIndex - 1 * this.photosByPage + l) % l;

    console.log(this.photosIndex + "/" + l)

    for (var i = 0; i < this.photosByPage; i++) {
      const image = this.allPhotos["photo"][(i + this.photosIndex) % l];
      const image_q = "https://live.staticflickr.com/"
        + image["server"] + "/"
        + image["id"] + "_"
        + image["secret"] + ".jpg"
      this.currentPhotos[i] = image_q;
    }
  }

  async more() {
    // avoid using an **expensive** observable for a simple value refresh
    // doesnt affect performance, lighter, better
    this.showMore = false;
    await new Promise(r => setTimeout(r, 10));
    this.showMore = true;
  }
  receiveNewValue(newValue: any) {
    this.additionalProperties = newValue;
  }
}
