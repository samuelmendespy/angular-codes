import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindComponentComponent } from './bind-component/bind-component.component';
import { TwoWayComponentComponent } from './two-way-component/two-way-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BindComponentComponent,
    TwoWayComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
