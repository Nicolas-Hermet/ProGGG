import { PlaylistService } from './services/playlist.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, interval, Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ProGGG-Angular';
  tracks: string[] = [];
  absolute: any;
  alpha: any;
  beta: any;
  gamma: any;

  triggerSubject = new Subject();
  private _destroyed$ = new Subject();
  trackSubscription: Subscription | undefined;
  permissionGranted: boolean = false;

  constructor(private playlistService: PlaylistService) {
    window.addEventListener('deviceorientation', event => {
      if (event.absolute == null) {
        DeviceOrientationEvent.requestPermission()
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

    this.trackSubscription = this.triggerSubject
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
