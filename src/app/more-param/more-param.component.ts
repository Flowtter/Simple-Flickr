import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-param',
  templateUrl: './more-param.component.html',
  styleUrls: ['./more-param.component.scss']
})
export class MoreParamComponent implements OnInit {
  @Input() showMore = false;

  lat = "";
  lon = "";
  min_upload_date = "";
  max_upload_date = "";
  tag_mode = "";
  sort = "";
  safe_search = "";
  in_gallery = "";
  @Output() query = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.showMore = false;
  }

  qv(value: string) {
    return value != undefined && value != null && value != "";
  }

  toTimestamp(strDate: string) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  onChange() {
    var res = "";
    if (this.qv(this.lat))
      res += "&lat=" + this.lat
    if (this.qv(this.lon))
      res += "&lon=" + this.lon
    if (this.qv(this.tag_mode))
      res += "&tag_mode=" + this.tag_mode
    if (this.qv(this.min_upload_date))
      res += "&min_upload_date=" + this.toTimestamp(this.min_upload_date)
    if (this.qv(this.max_upload_date))
      res += "&max_upload_date=" + this.toTimestamp(this.max_upload_date)
    if (this.qv(this.sort))
      res += "&sort=" + this.sort
    if (this.qv(this.safe_search))
      res += "&sage_search=" + this.safe_search
    if (this.qv(this.in_gallery))
      res += "&in_gallery=" + this.in_gallery

    this.query.emit(res);
  }

}



