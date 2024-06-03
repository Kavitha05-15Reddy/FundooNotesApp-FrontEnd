import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddNotesComponent } from './Components/add-notes/add-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import { AuthguardGuard } from './authguard/authguard.guard';
import { DirectivesDemoComponent } from './Components/directives-demo/directives-demo.component';
import { EventHandlingDemoComponent } from './Components/event-handling-demo/event-handling-demo.component';
import { DataBindingDemoComponent } from './Components/data-binding-demo/data-binding-demo.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'home',component:DashboardComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:'',redirectTo:"/home/notes",pathMatch:"full"},
    {path:'notes',component:GetNotesComponent},
    {path:'trash',component:TrashNotesComponent},
    {path:'archive',component:ArchiveNotesComponent}
  ]
  },

  {path:'data',component:DataBindingDemoComponent},
  {path:'directives',component:DirectivesDemoComponent},
  {path:'event',component:EventHandlingDemoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
