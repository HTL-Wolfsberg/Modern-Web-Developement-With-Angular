import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './components/overview/overview.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PanelModule } from 'primeng/panel';
import { MitarbeitskontrolleComponent } from './components/mitarbeitskontrolle/mitarbeitskontrolle.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ShoppingListComponent,
    MitarbeitskontrolleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    PanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
