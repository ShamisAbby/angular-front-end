import { DeathComponent } from './death/death.component';
import { ProjectComponent } from './project/project.component';
import { UncomfirmedComponent } from './uncomfirmed/uncomfirmed.component';
import { InforComponent } from './infor/infor.component';
import { DocComponent } from './doc/doc.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {path:'',component:LoginComponent
 },
 {path:'dashboard',component:DashboardComponent },
 {path:'register',component:RegisterComponent},
  {path:'doc',component:DocComponent},
  {path:'infor',component:InforComponent},
  {path:'uncomfirmed',component:UncomfirmedComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
