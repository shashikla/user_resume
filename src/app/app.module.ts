import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotateImageComponent } from './rotate-image/rotate-image.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BlurryImageComponent } from './blurry-image/blurry-image.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { ResumeHompageComponent } from './resume-hompage/resume-hompage.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    RotateImageComponent,
    BlurryImageComponent,
    HomeComponent,
    ResumeComponent,
    ResumeHompageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
