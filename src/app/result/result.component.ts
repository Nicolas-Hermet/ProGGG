import { Track } from './../interfaces/music.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  numberOfTracksFound: number = 0;
  foundTracks: Track[] = [];
  missedTracks: Track[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
