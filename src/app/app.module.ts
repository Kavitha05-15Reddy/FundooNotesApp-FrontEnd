import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AddNotesComponent } from './Components/add-notes/add-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import {MatCardModule} from '@angular/material/card';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateNotesComponent } from './Components/update-notes/update-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';

import { AuthguardService } from './Services/authguard/authguard.service';
import { FilterPipe } from './Pipe/filter.pipe';
import { DirectivesDemoComponent } from './Components/directives-demo/directives-demo.component';
import { EventHandlingDemoComponent } from './Components/event-handling-demo/event-handling-demo.component';
import { DataBindingDemoComponent } from './Components/data-binding-demo/data-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    AddNotesComponent,
    IconsComponent,
    DisplayNotesComponent,
    GetNotesComponent,
    UpdateNotesComponent,
    TrashNotesComponent,
    ArchiveNotesComponent,
    FilterPipe,
    DirectivesDemoComponent,
    EventHandlingDemoComponent,
    DataBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
