/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import {MaterializeDirective} from "angular2-materialize";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ MaterializeDirective],
  encapsulation: ViewEncapsulation.None,

  template: `
  <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
            <li>
              <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
              <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
              <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            <li>
              <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
              <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
          </ul>
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </nav>
    <a materialize="leanModal" [materializeParams]="[{dismissible: false}]" class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
    <md-sidenav-layout>
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

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
