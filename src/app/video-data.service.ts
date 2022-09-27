import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { video } from './app-types'

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<video[]>{
    return this.http
    .get<video[]>('https://api.angularbootcamp.com/videos')
    .pipe(map(video => video.map((video)=> ({...video, title: video.title.toUpperCase()}))
    .filter((video)=>video.author.toLowerCase().includes(""))
    ));
  }
}

