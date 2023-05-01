import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  images = [
    {name:"Your Orders", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact1.png"},
    {name:"Returns and Refunds", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact2.png"},
    {name:"Manage Address", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact3.png"},
    {name:"Payment Settings", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact4.png"},
    {name:"Account Details", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact5.png"},
    {name:"Amazon & Covid19", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact7.png"},
    {name:"Digital Service and Device Support", desc:"Track Packages Edit or Cancel Item", gif:"../../assets/contact6.png"},

  ]
}
