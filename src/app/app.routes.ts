import { Routes } from '@angular/router';
import {FlightComponent} from './flight/flight';
import {SplashComponent} from './splash/splash';
import {DashboardComponent} from './dashboard/dashboard';
import {HavanaComponent} from './havana/havana';
import {GalaxyComponent} from './galaxy/galaxy';
import {FiestaComponent} from './fiesta/fiesta';
import {GiftComponent} from './gift/gift';

export const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'havana', component: HavanaComponent },
  { path: 'galaxy', component: GalaxyComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'fiesta', component: FiestaComponent },
  { path: 'gift', component: GiftComponent },
  { path: '**', redirectTo: '' }
];
