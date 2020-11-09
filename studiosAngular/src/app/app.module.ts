import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MatchdetailsComponent } from './matchdetails/matchdetails.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UserdetailsService } from './userdetails/userdetails.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    MatchdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
   AppRoutingModule
   //MDBBootstrapModule.forRoot()
 

  ],
  providers: [UserdetailsService,MatchdetailsComponent,UserdetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
