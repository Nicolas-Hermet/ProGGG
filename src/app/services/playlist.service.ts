import { Track } from './../interfaces/music.model';
import { Injectable } from '@angular/core';
import playlists from '../assets/playlist.json';
import { Playlist } from '../interfaces/music.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlists: Playlist[] = [];
  private tracks: Track[] = [];

  constructor() {
    this.getPlaylists();
    this.tracks = this.playlists[0].tracks;
  }

  getRandomTrack() {
    let playlistLength = this.tracks.length;
    let trackNumber = Math.floor(Math.random() * playlistLength);
    console.log(trackNumber);
    return this.tracks[trackNumber];
  }

  getRandomNumber() {
    let playlistLength = this.tracks.length;
    return Math.floor(Math.random() * playlistLength);
  }

  getTrack(num: number) {
    return this.tracks.splice(num, 1)[0];
  }

  private getPlaylists() {
    playlists.playlists.forEach(playlist => {
      this.playlists.push(playlist.title);
    });    
  }
}
