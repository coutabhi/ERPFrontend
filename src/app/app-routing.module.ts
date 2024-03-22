import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { AdminpanelComponent } from './components/admin/adminpanel/adminpanel.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'about', component : AboutComponent},
  {path:'events', component : EventsComponent},
  {path:'admin', component : AdminComponent,data: { title:'', navigation: true,footer: true}},
  {path:'adminpanel', component : AdminpanelComponent,data: { title:'adminpanel', navigation: false,footer: false}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
