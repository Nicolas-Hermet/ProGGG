import { PlaylistService } from './../services/playlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists: any;
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlists = this.playlistService.playlists;
  }

}
