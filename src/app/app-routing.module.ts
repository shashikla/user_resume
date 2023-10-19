import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ResumeHompageComponent } from './resume-hompage/resume-hompage.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeHompageComponent
  },
  {
    path : 'details/:name', component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
