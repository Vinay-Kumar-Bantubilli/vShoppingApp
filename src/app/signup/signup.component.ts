import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private r:Router){}

  users = [
    {name:null, email:null, mobile:null, password:null, cpassword:null }
  ]

  loginsuccess(ref:any){
    // console.log(ref)
    alert("account creation successfully. Please login")
    localStorage.setItem("user",JSON.stringify(this.users))
    this.r.navigate(['/login']);
  }
}
