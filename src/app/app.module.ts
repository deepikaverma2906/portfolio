import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { ContactComponent } from './modules/contact/contact.component';
// import { HomeModule } from './modules/home/home.module';
import { ProjectsComponent } from './modules/projects/projects.component';
import { AboutComponent } from './modules/about/about.component';
import { FooterComponent } from './modules/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // HomeModule


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
