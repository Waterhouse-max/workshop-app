import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { video } from '../../app-types'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input()selectedId: string | undefined;
  @Input() list: video[]=[];
  @Output() selectedVideo= new EventEmitter<video>();
  constructor() {}

  ngOnInit(): void {}

  displayVideo(video: video){
    this.selectedVideo.emit(video)
  }
}
