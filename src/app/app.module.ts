import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
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
import { InnerNavComponent } from './nav/inner-nav/inner-nav.component';
import {GlobalService} from './services/global.service';
import { LoginComponent } from './admin/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavComponent,
    WinningAtLifeComponent,
    HobbiesComponent,
    TravelComponent,
    SweetLinksComponent,
    AudioComponent,
    BlogsComponent,
    UploadComponent,
    InnerNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    AngularFireModule,
    FormsModule
  ],
  providers: [
    UploadService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
