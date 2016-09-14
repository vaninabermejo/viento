
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import {MaterializeDirective} from "angular2-materialize";
import "materialize-css";
import {SideNav} from './pages/components/side-nav';
import {FooterNav} from './pages/components/footer-nav';

@Component({
  selector: 'app',
  directives: [ MaterializeDirective,SideNav ,FooterNav],
  encapsulation: ViewEncapsulation.None,
  template: `
    <body>
      <sideNav></sideNav>
      <main>
        <div class="row">
          <router-outlet></router-outlet>
        </div>
      </main>
      <footerNav></footerNav>
    </body>
  `,
  styleUrls: ['./app.component.css']
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 proof of conecpt';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
