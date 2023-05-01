import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-displayitem',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent {

  constructor(private ps:ProductsService, private ar:ActivatedRoute, private cs:CartService) {}

  product:any;
  id!:any;
  ngOnInit(){
    this.ar.paramMap.subscribe(
      param=>{
        let productId = param.get('id');
        this.id = productId;
        // this.product = this.ps.products.filter(p=>'p.id' == productId);
        console.log("display item  id: "+this.id)
      }
    )
    this.getProductDetails();
  }

  getProductDetails(){
    for (let p of this.ps.products){
      if (p.id == this.id){
        this.product = p;
      }
    }
  }

  addItem(a:any){
    this.cs.addItems(a.id, a.name,a.category,a.price, a.color, a.image);
    sessionStorage.setItem("id",a.id);
  }
  

}
