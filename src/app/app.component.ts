
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
    <!-- <header>
    <sideNav></sideNav>
  </header>
  <main>
      <div class="container">
        <div class="row">
          <router-outlet></router-outlet>
        </div>
      </div>
  </main>
<footerNav></footerNav> -->
<body>
  <sideNav></sideNav>
<main>
  <div class="container">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
