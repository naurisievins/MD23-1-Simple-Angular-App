import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
