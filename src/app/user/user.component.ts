import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  // constructor(private r:Router) {}
  // direct(){
  //   console.log(this.navigate);
  //   this.r.navigate(['user'],{
  //     queryParams:{'category':this.navigate}
  //   });
  // }
}
