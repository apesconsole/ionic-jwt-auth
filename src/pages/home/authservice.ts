import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    isLoggedin: boolean;
    AuthToken;
    userData: any;

    constructor(private http: Http) {
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
        this.userData = {};
    }
    
    storeUserCredentials(token, userId) {
        window.localStorage.setItem('apesconsole-token', token);
        window.localStorage.setItem('apesconsole-user', userId);
        this.useCredentials(token, userId);
    }
    
    useCredentials(token, userId) {
        this.isLoggedin = true;
        this.AuthToken = token;
        this.userData['userId'] = userId;
    }
    
    loadUserCredentials() {
        var token = window.localStorage.getItem('apesconsole-token');
        var userId = window.localStorage.getItem('apesconsole-user');
        this.useCredentials(token, userId);
    }
    
    destroyUserCredentials() {
        this.isLoggedin = false;
        this.AuthToken = null;
        this.userData = {};

        window.localStorage.clear();
    }
    
    authenticate(user) {
        var creds = "userId=" + user.userId + "&password=" + user.password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return new Promise((resolve, reject ) => {
            this.http.post('https://smartcom-app-server.herokuapp.com/api/authenticate', creds, {headers: headers})
            .map(res => res.json())
            .subscribe(data => {
                if(data.success){
                    this.storeUserCredentials(data.token, user.userId);
                    resolve(data);
                }
                else
                    reject(data);
            });
        });
    }
    adduser(user) {
        var creds = "userId=" + user.userId + "&password=" + user.password + "&name=" + user.name + "&address=" + user.address + "&phone=" + user.phone;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return new Promise(resolve => {
            this.http.post('https://smartcom-app-server.herokuapp.com/api/setup', creds, {headers: headers}).subscribe(data => {
                if(data.json().success){
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
    }
    
    getinfo() {
        return new Promise((resolve, reject ) => {
            this.loadUserCredentials();
            this.http.get('https://smartcom-app-server.herokuapp.com/api/user?userId=' + this.userData.userId + '&token=Bearer ' + this.AuthToken)
            .map(res => res.json())
            .subscribe( data => {
                if(data.success){
                    this.userData = data;
                    resolve(this.userData);
                } else {
                    reject(data);
                }
            });
        });
    }

    getDisplayinfo() {
        return this.userData;
    }

    logout() {
        this.destroyUserCredentials();
    }
}