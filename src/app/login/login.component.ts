import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private r:Router, private user:UsersService){}

  loginObj:any = [
    {name:'', password:''},
  ]

  loginsuccess(ref:any, un:any, cp:any){
    // sessionStorage.setItem("user", "vinay");
    alert("login successful");
    this.user.storeUsers(this.loginObj);
    this.r.navigate(['/home']);
  }

  openLoginPage(){
    this.r.navigate(['/signup']);
  }
}
