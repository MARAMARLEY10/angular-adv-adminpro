import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Gracica1Component } from './pages/grafica1/gracica1.component';
import { NotpagesfoundComponent } from './pages/notpagesfound/notpagesfound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

// aqui estan las rutas de mi aplicacion
const routes: Routes = [
  { path:'',
   component:PagesComponent,
  // aqui hay un arreglo con las rutas hijas
  children:[
    { path:'dashboard', component: DashboardComponent},
    { path:'progress', component:ProgressComponent},
    { path:'grafica1', component:Gracica1Component},
    { path: '', redirectTo: '/dashboard',pathMatch: 'full'}
  ]
  },

    { path:'register', component:RegisterComponent},
    { path:'login', component: LoginComponent},

// { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    { path:'**', component: NotpagesfoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
