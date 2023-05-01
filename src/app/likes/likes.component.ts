import { Component } from '@angular/core';
import {  } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  constructor(private cs:WishlistService){};
  product = this.cs.cartArray;
  total:number = 0;
  quantity:number = 1;
  getQuantity(qty:any){
    this.quantity = qty.value;
    console.log(this.quantity)
  }

  deleteItem(index:any){
    console.log(index)
    this.cs.deleteItems(index);
  }
}
