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
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
