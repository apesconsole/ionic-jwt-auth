import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    isLoggedin: boolean;
    AuthToken;
    userData: any;

    serverDataSet: any;

    constructor(private http: Http) {
        this.http = http;
        this.isLoggedin = false;
        this.AuthToken = null;
        this.userData = {};
        this.serverDataSet = {};
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
            this.http.post('http://localhost:3003/api/authenticate', creds, {headers: headers})
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
            this.http.post('http://localhost:3003/api/setup', creds, {headers: headers}).subscribe(data => {
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
            this.http.get('http://localhost:3003/api/user?userId=' + this.userData.userId + '&token=Bearer ' + this.AuthToken)
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



    /*
        Transport
    */
    transportdata() {
        return new Promise((resolve, reject ) => {
            this.loadUserCredentials();
            this.http.get('http://localhost:3003/api/transportdataset?token=Bearer ' + this.AuthToken)
            .map(res => res.json())
            .subscribe( data => {
                if(data.success){
                    this.serverDataSet = data;
                    resolve(this.serverDataSet);
                } else {
                    reject(data);
                }
            });
        });
    }  

    /*
        Construction
    */
    constructionsites(){
        return new Promise((resolve, reject ) => {
            this.loadUserCredentials();
            this.http.get('http://localhost:3003/api/loadcnstrntsites?userId=' + this.userData.userId + '&token=Bearer ' + this.AuthToken)
            .map(res => res.json())
            .subscribe( data => {
                if(data.success){
                    this.serverDataSet = data;
                    resolve(this.serverDataSet);
                } else {
                    reject(data);
                }
            });
        });   
    }

    savesitedata(siteData){
        var postData = 'userId=' + this.userData.userId + '&siteData=' + JSON.stringify(siteData) + '&token=Bearer ' + this.AuthToken;
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        return new Promise((resolve, reject ) => {
            this.loadUserCredentials();
            this.http.post('http://localhost:3003/api/savesitedata', postData , {headers: headers})
            .map(res => res.json())
            .subscribe( data => {
                if(data.operation){
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        }); 
    }

    approvesitedata(siteId){
        var postData = 'userId=' + this.userData.userId + '&siteId=' + siteId + '&token=Bearer ' + this.AuthToken;
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        return new Promise((resolve, reject ) => {
            this.loadUserCredentials();
            this.http.post('http://localhost:3003/api/approvesitedata', postData , {headers: headers})
            .map(res => res.json())
            .subscribe( data => {
                if(data.operation){
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        }); 
    }
}