
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogsComponent} from './blogs/blogs.component';
import {WinningAtLifeComponent} from './guides/winning-at-life/winning-at-life.component';
import {HobbiesComponent} from './guides/hobbies/hobbies.component';
import {TravelComponent} from './guides/travel/travel.component';
import {SweetLinksComponent} from './sweet-links/sweet-links.component';
import {AudioComponent} from './audio/audio.component';

const routes: Routes = [
  // Auth routes
  { path: '', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'guides/winning-at-life', component: WinningAtLifeComponent },
  { path: 'guides/hobbies', component: HobbiesComponent },
  { path: 'guides/travel', component: TravelComponent },
  { path: 'sweet-links', component: SweetLinksComponent },
  { path: 'audio', component: AudioComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {

}
