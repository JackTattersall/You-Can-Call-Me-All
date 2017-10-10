
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  // Auth routes
  { path: '', component: HomeComponent },
  // { path: 'blogs', component: LoginComponent },
  // { path: 'guides/winning-at-life', component: RegisterComponent },
  // { path: 'guides/hobbies', component: RegisterSuccessComponent },
  // { path: 'guides/travel', component: RegisterFailureComponent },
  // { path: 'sweet-links', component: RegisterEmailSentComponent },
  // { path: 'audio', component: AccountDetailsComponent},
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
