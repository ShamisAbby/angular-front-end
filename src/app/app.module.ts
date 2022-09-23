import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { DocComponent } from './doc/doc.component';
import { InforComponent } from './infor/infor.component';
import { UncomfirmedComponent } from './uncomfirmed/uncomfirmed.component';
import { ProjectComponent } from './project/project.component';
import { DeathComponent } from './death/death.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    DocComponent,
    InforComponent,
    UncomfirmedComponent,
    ProjectComponent,
    DeathComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
