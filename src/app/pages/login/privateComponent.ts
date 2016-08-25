import {Component} from '@angular/core';
import {AuthService} from '../../services/authService';


@Component({
    selector: 'login-form',
    providers: [AuthService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
    	`
})

export class PrivateComponent {

    constructor(
        private _service:AuthService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}
