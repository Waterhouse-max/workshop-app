import { Component, OnInit } from '@angular/core';
import { searchParams, video } from '../../app-types'
import {VideoDataService} from '../../video-data.service'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: video | undefined;
  list: Observable<video[]>;
  filteredList: Observable<video[]>;
  mySearch: searchParams ={title: "", author: ""};
  source: any;
   
  constructor(videoSvc: VideoDataService) {
    this.list=videoSvc.loadVideos().pipe(tap((videos) => this.setSelectedVideo(videos[0])));
    this.filteredList=this.list;
  
   }



  ngOnInit(): void {
  }

  setSelectedVideo(selectVideo: video) {
        this.selectedVideo = selectVideo;
  }

  test(eventData: searchParams) {
    console.log("woooooo", eventData)

    this.filteredList=this.list.pipe(
      map((video: video[]) => video
      .filter((video)=>video.author.toLowerCase().includes(eventData.author.toLowerCase()))
      .filter((video)=>video.title.toLowerCase().includes(eventData.title.toLowerCase()))
      )
    );
  

    
  }

}
