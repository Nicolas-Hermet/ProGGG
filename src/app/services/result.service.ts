import { Injectable } from '@angular/core';
import { Track } from '../interfaces/music.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  score: number = 0;
  missedTracksList: Track[] = [];


  constructor() { }

  getScore(): number {
    return this.score;
  }

  increaseScore() {
    this.score += 1;
  }

  resetScore() {
    this.score = 0;
  }

  getMissedTracks(): Track[] {
    return this.missedTracksList;
  }

  addMissedTrack(track: Track) {
    this.missedTracksList.push(track);
  }

  resetMissedTracksList() {
    this.missedTracksList = [];
  }

}
