import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CarSizesComponent } from './car-sizes/car-sizes.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/home-dashboard', pathMatch: 'full' },
  { path: 'home-dashboard', component: HomeDashboardComponent, },
  { path:'allservices',component:AllservicesComponent,},
  { path:'car-sizes',component:CarSizesComponent ,},
  { path:'contact-details',component:ContactDetailsComponent ,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
