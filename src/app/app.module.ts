import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApolloModule } from 'angular2-apollo';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { client } from './client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    // Define the default ApolloClient
    ApolloModule.withClient(client),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
