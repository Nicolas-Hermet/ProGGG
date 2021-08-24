import { Injectable } from '@angular/core'
import playlists from '../assets/playlist.json';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private tracks = playlists.tracks;

  constructor() { }

  getRandomTrack(){
    let playlistLength = this.tracks.length
    let trackNumber = Math.floor(Math.random() * playlistLength)
    console.log(trackNumber)
    return this.tracks[trackNumber]
  }
}
