import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { LoanCreateComponent } from './features/loan/loan-create/loan-create.component';
import { LoanListComponent } from './features/loan/loan-list/loan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanCreateComponent,
    LoanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
