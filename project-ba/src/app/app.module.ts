import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderListComponent } from './components/render-list/render-list.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { MainLogoComponent } from './shared/main-logo/main-logo.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { TopNavBarComponent } from './shared/top-nav-bar/top-nav-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './pages/refund-policy/refund-policy.component';
import { CustomComponentComponent } from './components/custom-component/custom-component.component';
import { AncestorComponentComponent } from './components/ancestor-component/ancestor-component.component';
import { DescendantComponentComponent } from './components/descendant-component/descendant-component.component';
import { ServicesAComponent } from './components/services-a/services-a.component';
import { ServicesBComponent } from './components/services-b/services-b.component';
import { EventTrackerComponent } from './components/event-tracker/event-tracker.component';
import { ParentEventTrackerComponent } from './components/parent-event-tracker/parent-event-tracker.component';
import { CardComponent } from './components/card/card.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { MultiplyByPipe } from './shared/pipes/multiply-by.pipe';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { BindComponent } from './components/bind/bind.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { DataManagementComponent } from './components/data-management/data-management.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderListComponent,
    FooterBarComponent,
    MainLogoComponent,
    SearchBarComponent,
    TopNavBarComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    CustomComponentComponent,
    AncestorComponentComponent,
    DescendantComponentComponent,
    ServicesAComponent,
    ServicesBComponent,
    EventTrackerComponent,
    ParentEventTrackerComponent,
    CardComponent,
    CustomPipeComponent,
    MultiplyByPipe,
    TwoWayBindingComponent,
    BindComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    DataManagementComponent
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
