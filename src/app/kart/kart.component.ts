import { Component, OnChanges, DoCheck, AfterViewInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent {
  constructor(private cs:CartService){};
  product = this.cs.cartArray;

  total:number = 0;
  ngAfterViewInit(){
    for (let a of this.cs.cartArray){
      this.total+=a.price;
      console.log("total amount is : "+this.total)
    }
  }
  quantity:number = 1;
  price:number = 1;
  getQuantity(qty:any, price:any){
    this.quantity = qty.value;
    this.price = price;
    // console.log(this.quantity)
    this.total=this.total+this.quantity*price;
    console.log(this.total)
  }

  deleteItem(index:any){
    console.log(index)
    this.cs.deleteItems(index);
  }


}
