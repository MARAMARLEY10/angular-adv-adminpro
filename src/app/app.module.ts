import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagesfoundComponent } from './pages/notpagesfound/notpagesfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Gracica1Component } from './pages/grafica1/gracica1.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotpagesfoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Gracica1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
