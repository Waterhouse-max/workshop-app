import { Component, OnInit, Input } from '@angular/core';
import { video } from '../../app-types'


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() video: video | undefined;
  @Input() isSelected=false;
  constructor() { }

  ngOnInit(): void {
  }

}
