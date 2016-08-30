import { Component} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
@Component({
  selector: "sideNav",
  template: `
  <div class="sidebar-overlay teal darken-2"></div>
   <nav class="teal darken-3 navbar navbar-dark bg-inverse navbar-fixed-top topnav">
      <ul class="right hide-on-med-and-down">
        <div navbar-fixed hide-on-small-only >
        <li routerLinkActive="active"><a [routerLink]="['/yyyy']">login</a></li>
        <li routerLinkActive="active"><a hreF="#" (click)="xxxx($event)">Search</a></li>
        <li routerLinkActive="active"><a routerLink="/dashboard" >Dashboard</a></li>
        <li routerLinkActive="active"><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>

        <li routerLinkActive="active"><a href="#" (click)="logout($event)">Logout</a></li>
      </div>
      </ul>
      <ul  id="slide-out">
        <div class="left">
        <ul >
          <li><a [routerLink]="['/yyyy']">login</a></li>
          <li><a hreF="#" (click)="xxxx($event)">Seach</a></li>
          <li><a href="#" (click)="logout($event)">Logout</a></li>
          <li routerLinkActive="active"><a routerLink="/dashboard" >Dashboard</a></li>
          <li routerLinkActive="active"><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
        </ul>
      </div>
    </ul>
     <a materialize="sideNav" [materializeParams]="[{edge:'left'}]" href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu">Menu</i></a>
   </nav>
<nav class="sidebar ">
    <ul  class="side-nav fixed">
       <li >
           <a href="https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip" class="btn btn-default-outline buy-now-btn" role="button" style="padding: .375rem 1rem !important; border-color: #999;">Download Now</a>
       </li>
       <li >
           <a href="https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip" class="btn btn-default-outline buy-now-btn" role="button" style="padding: .375rem 1rem !important; border-color: #999;">Download Now</a>
       </li>
       <li >
           <a href="https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip" class="btn btn-default-outline buy-now-btn" role="button" style="padding: .375rem 1rem !important; border-color: #999;">Download Now</a>
       </li>
    </ul>
  </nav>





     `
})
export class SideNav{

}
