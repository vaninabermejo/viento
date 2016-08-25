import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {contentHeaders} from '../services/common/header';
import {Router} from '@angular/router';
import {User} from './model/user';
var users=[new User('admin@admin', '123'),
          new User('vani@admin','123')];
@Injectable()
export class AuthService{
  private loggedIn  :boolean=false;
  constructor( private router: Router){
    this.loggedIn=!!localStorage.getItem('user');

  }
  login(event,user){
    event.preventDefault();
    console.log(user);
    var authUser= users.find(u=>u.email===user.email);
    if(authUser && authUser.password===user.password){
      localStorage.setItem('user', authUser.email);
      this.router.navigate(['/home']);
      this.loggedIn=true;
      return true;
    }
    return false;
  // return this.http.post('/login', JSON.stringify({user.email, user. password}),{headers}
  // ).map(res=>res.json())
  // .map((res)=>{
  //   if (res.success){
  //     localStorage.setItem('auth_token', res.auth_token);
  //     this.loggedIn=true;
  //   }
  //   return res.success;
  // });
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['home']);
    this.loggedIn=false;
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  checkCredentials(){
    if (localStorage.getItem("user") === null){
        this.router.navigate(['login']);
    }
  }
  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
