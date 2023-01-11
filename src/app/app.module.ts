import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HappybuttonComponent } from './components/happybutton/happybutton.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './user.service';
import { DataCoursesComponent } from './components/data-courses/data-courses.component';
import { FormCoursesComponent } from './components/form-courses/form-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    HappybuttonComponent,
    UsersComponent,
    DataCoursesComponent,
    FormCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
