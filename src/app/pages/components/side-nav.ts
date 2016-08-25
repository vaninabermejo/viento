import { Component} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
@Component({
  selector: "sideNav",
   styles: [`
     nav {
         height: 0px;
     }
     .side-nav {
         width: 200px;
     }
     li.active {
       background-color: #ee6e73
     }
   `],
   template: `
   <nav class=" teal darken-3">
      <ul class="right hide-on-med-and-down">
        <div navbar-fixed hide-on-small-only >
             <!-- <li *ngFor="let routeName of routeNames" routerLinkActive="active"><a [routerLink]="[routeName]">{{routeName}}</a></li> -->
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

   `
})
export class SideNav{

}
