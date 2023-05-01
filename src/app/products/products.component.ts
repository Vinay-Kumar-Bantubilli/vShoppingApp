import { Component, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private ps:ProductsService, private ar:ActivatedRoute, private r:Router, private cs:WishlistService){}
  products = this.ps.products;
  product:any;
  category:any;

  ngOnInit(){
    this.ar.queryParamMap.subscribe(
      qpm=>{
        let category = qpm.get("category")
        this.category = category;
        if (category){
          this.product = this.ps.products.filter(
            (p,i,parr)=>{
              return p.category == category;
            }
          )
        }
        else{
          this.product = this.ps.products;
        }
        // console.log(this.category);
      }
    )
  }

  addItem(a:any){
    this.cs.addItems(a.id, a.name,a.category,a.price, a.color, a.image);
  }
  
  id!:number;
  b:number = 0;
  addToWishlist(id:any, a:any){
    this.b++;
    this.id = id;
    console.log(this.b);
    this.cs.addItems(a.id, a.name,a.category,a.price, a.color, a.image);
  }
  removeFromWishlist(id:any){
    this.b--;
    console.log(this.b);
  }
}