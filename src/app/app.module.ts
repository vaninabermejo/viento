import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { FormsModule } from '@angular/forms';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
//import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import {MaterializeDirective} from "angular2-materialize";

import { AppState } from './app.service';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { HeroesModule } from './pages/heroes/heroes.module';
import { routing, appRoutingProviders } from './app.routing';

import { LoginComponent } from './pages/login/login.component';

import { DialogService }  from './services/crisis-center/dialog.service';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  appRoutingProviders,
  DialogService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    About,
    Home,
    NoContent,
    MaterializeDirective,
    LoginComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
  hmrOnInit(store) {
    if (!store && !store.state) return;
    console.log('HMR store', store);
    this.appState.state = store.state;
    delete store.state;
  }
  hmrOnDestroy(store) {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    var state = this.appState.state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
  }
}
