import { Component, OnInit } from '@angular/core';
import { searchParams, video } from '../../app-types'
import {VideoDataService} from '../../video-data.service'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: video | undefined;
  list: Observable<video[]>;
  mySearch: searchParams ={title: "", author: ""};
   
  constructor(videoSvc: VideoDataService) {
    this.list=videoSvc.loadVideos().pipe(tap((videos) => this.setSelectedVideo(videos[0])));
  
   }



  ngOnInit(): void {
  }

  setSelectedVideo(selectVideo: video) {
        this.selectedVideo = selectVideo;
  }

  onBookAdded(eventData: searchParams) {
    console.log("woooooo", eventData)
  }

}
