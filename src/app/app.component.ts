import { PlaylistService } from './playlist.service'
import { Component } from '@angular/core'
import { Subject, Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProGGG-Angular'
  tracks: string[] = []
  toto: any
  absolute: any
  alpha: any
  beta: any
  gamma: any

  triggerSubject = new Subject()
  trackSubscription: Subscription | undefined

  constructor(private playlistService: PlaylistService) {}

  ngOnInit() {
    // window.addEventListener('deviceorientation', event => {
    //   this.absolute = event.absolute
    //   this.alpha = event.alpha
    //   this.beta = event.beta
    //   this.gamma = event.gamma
    //   if (Math.abs(this.gamma) < 40) {
    //     this.triggerSubject.next(this.playlistService.getRandomTrack())
    //   }
    // })
    // window.addEventListener('devicemotion', e => {
    //   if (e.acceleration) {
    //     this.toto = e.acceleration.z
    //   }
    // })
    setInterval(() => {
      this.triggerSubject.next(this.playlistService.getRandomTrack())
    }, 2000);

    this.trackSubscription = this.triggerSubject.subscribe(
      (track: any) => {
        this.tracks.push(track)
      }
    );
  }
}
