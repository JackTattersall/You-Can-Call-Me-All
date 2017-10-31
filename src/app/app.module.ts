import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import {AppRouterModule} from './app-router-module';
import { WinningAtLifeComponent } from './guides/winning-at-life/winning-at-life.component';
import { HobbiesComponent } from './guides/hobbies/hobbies.component';
import { TravelComponent } from './guides/travel/travel.component';
import { SweetLinksComponent } from './sweet-links/sweet-links.component';
import { AudioComponent } from './audio/audio.component';
import { BlogsComponent } from './blogs/blogs.component';
import {UploadService} from './services/upload.service';
import { UploadComponent } from './shared/upload/upload.component';
import {AngularFireModule, FirebaseApp} from 'angularfire2';
import { InnerNavComponent } from './home/nav/inner-nav/inner-nav.component';
import {GlobalService} from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WinningAtLifeComponent,
    HobbiesComponent,
    TravelComponent,
    SweetLinksComponent,
    AudioComponent,
    BlogsComponent,
    UploadComponent,
    InnerNavComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    AngularFireModule
  ],
  providers: [
    UploadService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
