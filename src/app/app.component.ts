
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import {MaterializeDirective} from "angular2-materialize";
import "materialize-css";
import {SideNav} from './pages/components/side-nav';
@Component({
  selector: 'app',
  directives: [ MaterializeDirective ],
  encapsulation: ViewEncapsulation.None,
  styles:[`body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }`],
   template: `
  <nav class="teal darken-3">
     <ul class="right hide-on-med-and-down">
       <div navbar-fixed hide-on-small-only >
       <li routerLinkActive="active"><a [routerLink]="['/yyyy']">login</a></li>
       <li routerLinkActive="active"><a hreF="#" (click)="xxxx($event)">xxxx</a></li>
       <li routerLinkActive="active"><a href="#" (click)="logout($event)">Logout</a></li>
     </div>
     </ul>
     <ul  id="slide-out">
       <div class="left">
       <ul >
         <li><a [routerLink]="['/yyyy']">login</a></li>
         <li><a hreF="#" (click)="xxxx($event)">xxxx</a></li>
         <li><a href="#" (click)="logout($event)">Logout</a></li>
              </ul>
     </div>
   </ul>
   <a materialize="sideNav" [materializeParams]="[{edge:'left'}]" href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu">Menu</i></a>
  </nav>
    <main class="container">
      <a materialize="leanModal" [materializeParams]="[{dismissible: false}]" class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
      </div>
      <router-outlet></router-outlet>
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    </main>


    <footer class="page-footer teal darken-3" data-position="bottom">
     <div class="container">
     <a class="grey-text text-lighten-4">© 2016 Copyright Text</a>
     <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
     </div>

    </footer>

  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
