import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageWithParametersComponent } from './pages/page-with-parameters/page-with-parameters.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageNotFoundComponent,
    PageWithParametersComponent,
    PrivatePageComponent,
    LoginComponent
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
