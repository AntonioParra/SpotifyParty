import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { YearPage } from './pages/year-page/year-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: ':year', component: YearPage }
];
