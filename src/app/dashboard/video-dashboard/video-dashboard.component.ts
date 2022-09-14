import { Component, OnInit } from '@angular/core';
import { video } from '../../app-types'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: video | undefined;
  list: video[]=[];
   
  constructor(http: HttpClient) {
    http.get<video[]>('https://api.angularbootcamp.com/videos')
    .subscribe(list => (this.list = list));
    this.setSelectedVideo(this.list[0]);
   }



  ngOnInit(): void {
  }

  setSelectedVideo(selectVideo: video) {
        this.selectedVideo = selectVideo;
  }

}
