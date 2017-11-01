
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {BlogsComponent} from './blogs/blogs.component';
import {WinningAtLifeComponent} from './guides/winning-at-life/winning-at-life.component';
import {HobbiesComponent} from './guides/hobbies/hobbies.component';
import {TravelComponent} from './guides/travel/travel.component';
import {SweetLinksComponent} from './sweet-links/sweet-links.component';
import {AudioComponent} from './audio/audio.component';
import {AAudioComponent} from './admin/a-audio/a-audio.component';
import {ABlogsComponent} from './admin/a-blogs/a-blogs.component';
import {AHobbiesComponent} from './admin/a-hobbies/a-hobbies.component';
import {ASweetLinksComponent} from './admin/a-sweet-links/a-sweet-links.component';
import {ATravelComponent} from './admin/a-travel/a-travel.component';
import {AWinningAtLifeComponent} from './admin/a-winning-at-life/a-winning-at-life.component';
import {LoginComponent} from './admin/login/login.component';
import {CanActivateViaAuthGuard} from './shared/auth-guard';

const routes: Routes = [
  // Auth routes
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent },
  { path: 'guides/winning-at-life', component: WinningAtLifeComponent },
  { path: 'guides/hobbies', component: HobbiesComponent },
  { path: 'guides/travel', component: TravelComponent },
  { path: 'sweet-links', component: SweetLinksComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'a-audio', component: AAudioComponent, canActivate: [CanActivateViaAuthGuard] },
      { path: 'a-blogs', component: ABlogsComponent, canActivate: [CanActivateViaAuthGuard] },
      { path: 'a-hobbies', component: AHobbiesComponent, canActivate: [CanActivateViaAuthGuard] },
      { path: 'a-sweet-links', component: ASweetLinksComponent, canActivate: [CanActivateViaAuthGuard] },
      { path: 'a-travel', component: ATravelComponent, canActivate: [CanActivateViaAuthGuard] },
      { path: 'a-winning-at-life', component: AWinningAtLifeComponent, canActivate: [CanActivateViaAuthGuard] },
      { path: 'login', component: LoginComponent },
    ]
  },
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
