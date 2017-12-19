import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationComponent } from './components/application/application.component';
import { LoginComponent } from './components/login/login.component';
import {AppServicesService} from './services/app-services.service';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';

// create routes
const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'application-detail', component:ApplicationDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ApplicationComponent,
    LoginComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppServicesService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
