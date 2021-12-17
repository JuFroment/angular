import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { LineComponent } from './line/line.component';
import { ButtonComponent } from './button/button.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { CarTableComponent } from './car-table/car-table.component';
import { CarLineComponent } from './car-line/car-line.component';
import { CarCardComponent } from './car-card/car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    LineComponent,
    ButtonComponent,
    AnimalCardComponent,
    CarTableComponent,
    CarLineComponent,
    CarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
