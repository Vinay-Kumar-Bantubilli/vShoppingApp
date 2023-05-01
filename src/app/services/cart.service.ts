import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  cartArray = [
    {id:0, name:"Samsung", category:"Mobile", price:12452, color:"green", image:"any"}
  ];

  addItems(id:any, name:any, category:any, price:any, color:any, image:any){
    // id:99, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion1.jpg'
    this.cartArray.push({id:id,name:name,category:category,price:price,color:color,image:image},);
  }

  deleteItems(index:any){
    // let index = this.cartArray.indexOf(id);
    // console.log(this.cartArray.indexOf(id));
    this.cartArray.splice(index, 1);
  }
}
