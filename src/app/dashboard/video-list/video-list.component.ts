import { Component, Input, OnInit } from '@angular/core';
import { video } from '../../app-types'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  selectedId: string | undefined;
  @Input() list: video[]=[];
  
  constructor() {}

  ngOnInit(): void {}
}
