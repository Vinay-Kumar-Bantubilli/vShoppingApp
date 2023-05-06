import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  images = [
    {name:"Your Orders", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact1.png", navigate:'Your Orders'},
    {name:"Returns and Refunds", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact2.png", navigate:'returns'},
    {name:"Manage Address", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact3.png", navigate:'address'},
    {name:"Payment Settings", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact4.png", navigate:'paymentsMethods'},
    {name:"Amazon Pay Balance", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/account1.png", navigate:'payBalance'},
    {name:"Amazon & Covid19", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact7.png", navigate:'orders'},
    {name:"Contact Us", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/account2.png", navigate:'contact'},
  ]



  // navigate!:string;
  // direct(){
  //   console.log(this.navigate);
  //   this.r.navigate(['user'],{
  //     queryParams:{'category':this.navigate}
  //   });
  // }

  constructor(private r:Router, private users:UsersService) {}
  userName!:string;
  ngAfterViewInit(){
    this.userName = this.users.name;
    console.log("ngDoCheck"+this.userName)
  }

  toLoginPage(){
    alert("logout successfull");
    this.r.navigate(['login']);
  }

}
