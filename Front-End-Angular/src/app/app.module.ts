import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { profileComponent } from './components/profile/profile.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EduExpComponent } from './components/edu-exp/edu-exp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { coursesComponent } from './components/courses/courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    profileComponent,
    AboutmeComponent,
    EduExpComponent,
    SkillsComponent,
    coursesComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
