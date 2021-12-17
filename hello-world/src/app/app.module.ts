import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { TempoComponent } from './tempo/tempo.component';
import { CardComponent } from './card/card.component';
import { SquareWithArrowsComponent } from './square-with-arrows/square-with-arrows.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent,
    TempoComponent,
    CardComponent,
    SquareWithArrowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
