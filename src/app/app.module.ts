import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllservicesComponent } from './allservices/allservices.component';
import { CarSizesComponent } from './car-sizes/car-sizes.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CarServices } from './CarServices';
import { CarSizesModel } from './car-sizes/car-sizes-model';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    AllservicesComponent,
    CarSizesComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    CarServices,
    CarSizesModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
