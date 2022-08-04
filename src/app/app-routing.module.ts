import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { TrackOverComponent } from './track-over/track-over.component';
import { NananereComponent } from './nananere/nananere.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'splash-screen', component: SplashScreenComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'nananere', component: NananereComponent},
  {path: 'track-over', component: TrackOverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
