import { PlaylistService } from '../services/playlist.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../interfaces/music.model';

@Component({
  selector: 'app-nananere',
  templateUrl: './nananere.component.html',
  styleUrls: ['./nananere.component.scss']
})
export class NananereComponent implements OnInit, OnDestroy {
  // Inputs
  inputPlaylist: any;
  playlistTracks: Track[] = [];

  // Sensors
  absolute: any;
  alpha: any;
  beta: any;
  gamma: any;

  // Triggering
  triggerSubject = new Subject();
  permissionGranted: boolean = false;

  // Tracks proposed.
  tracks: Track[] = [];


  private _destroyed$ = new Subject();

  constructor(
    private playlistService: PlaylistService,
    private _route: ActivatedRoute) {
    window.addEventListener('deviceorientation', event => {
      if (event.absolute == null) {
        (DeviceOrientationEvent as any).requestPermission()
          .then((permissionState: any) => {
            if (permissionState === 'granted') {
              this.permissionGranted = true;
            }
          })
          .catch(console.error);
      }
    });
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.inputPlaylist = params;
      this.playlistTracks = params.tracks
  });
    window.addEventListener('deviceorientation', event => {
      this.absolute = event.absolute;
      this.alpha = event.alpha;
      this.beta = event.beta;
      this.gamma = event.gamma;
      if (Math.abs(this.gamma) < 40) {
        console.trace(
          '%c Oh my heavens! ',
          'background: #222; color: #bada55',
          this.gamma
        );
        this.triggerSubject.next(this.playlistService.getRandomNumber());
      }
    });

    this.triggerSubject
      .pipe(
        debounceTime(1000),
        takeUntil(this._destroyed$)
      )
      .subscribe((trackNumber: any) => {
        this.tracks.push(this.playlistService.getTrack(trackNumber));
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.complete();
  }
}
