import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { HeroesComponent }      from './pages/heroes/heroes.component';
import { HeroDetailComponent }  from './pages/heroes/hero-detail.component';
import { ScoreboardComponent }  from './pages/scoreboard/scoreboard.component';
// import { Home } from './home';
// import { About } from './about';
// import { NoContent } from './no-content';

//import { DataResolver } from './app.resolver';


import { loginRoutes,authProviders }  from './pages/login/loging.routing';

import { CanDeactivateGuard } from './services/can-deactivate-guard.service';

//
// const crisisCenterRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: 'app/pages/crisis-center/crisis-center.module#CrisisCenterModule'
//   }
// ];

const appRoutes: Routes = [
  // ...loginRoutes,
  // ...crisisCenterRoutes,
    { path: '',       redirectTo: '/dashboard',pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
  //  { path: 'login',  component: LoginComponent },
    //{ path: 'about', component: About },
    { path: 'detail/:id', component: HeroDetailComponent  },
    { path: 'heroes', component: HeroesComponent },
    { path: 'scoreboard', component: ScoreboardComponent }
    //{ path: '**',    component: NoContent }

];
//
// export const appRoutingProviders: any[] = [
//   authProviders,
//   CanDeactivateGuard
// ];

 //export const routing = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
