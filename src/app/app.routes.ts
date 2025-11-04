import { Routes } from '@angular/router';
import {MainPage} from '@app/components/pages/main-page/main-page';
import {Reservation} from '@pages/reservation/reservation';
import {Equipment} from '@pages/equipment/equipment';
import {Rules} from '@pages/rules/rules';
import {KontaktPage} from '@pages/kontakt/kontakt';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'reservation', component: Reservation },
  { path: 'equipment', component: Equipment },
  { path: 'rules', component: Rules },
  { path: 'kontakt', component: KontaktPage },
];
