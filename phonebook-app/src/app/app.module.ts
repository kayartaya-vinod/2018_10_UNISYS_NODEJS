import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonebookService } from './services/phonebook.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PhonebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
