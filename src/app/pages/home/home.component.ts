import {Component} from '@angular/core';
import {AuthService} from '../../services/authService';
import {User} from '../../services/model/user';
import {MaterializeDirective} from "angular2-materialize";

@Component({
selector:'home-form',
providers:[AuthService],
templateUrl:'home.html',

})
export class HomeComponent{
constructor(private authService: AuthService){

}
ngOnInit(){
  this.authService.checkCredentials();
}
logout(){
  this.authService.logout();
}
}
