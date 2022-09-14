import { Component, OnInit, Input } from '@angular/core';
import { video } from 'src/app/app-types';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: video | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
