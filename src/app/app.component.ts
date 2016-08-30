
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import {MaterializeDirective} from "angular2-materialize";
import "materialize-css";
import {SideNav} from './pages/components/side-nav';
@Component({
  selector: 'app',
  directives: [ MaterializeDirective,SideNav ],
  encapsulation: ViewEncapsulation.None,
  template: `
   <sideNav></sideNav>
   <!-- <h2>{{name}}</h2>
    <main class="container">
      <a materialize="leanModal" [materializeParams]="[{dismissible: false}]" class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
      </div>
      <router-outlet></router-outlet>
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    </main> -->
    <div class="container">

      	<h2>{{name}}</h2>

	<router-outlet></router-outlet>
</div>

    <footer class="page-footer teal darken-3" data-position="bottom">
     <div class="container">
     <a class="grey-text text-lighten-4">© 2016 Copyright Text</a>
     <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
     </div>

    </footer>

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
