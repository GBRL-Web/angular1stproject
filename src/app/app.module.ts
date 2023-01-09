import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HappybuttonComponent } from './components/happybutton/happybutton.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HappybuttonComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
