import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
// import { ProductsComponent } from '../products/products.component';
// import { transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeArray = [
    {image:'../../assets/home5.jpg', direct:'/products', category:'Mobiles & Accessories'},
    {image:'../../assets/home1.jpg', direct:'/products', category:'Women'},
    {image:'../../assets/home3.jpg', direct:'/products', category:'Garden'},
    {image:'../../assets/home4.jpg', direct:'/products', category:'Women'},
    
  ]
  path!:string;
  a:number = 0;

  direct!:string;

  category!:string;

  ngOnInit(){
    this.path = this.homeArray[this.a].image;
    this.direct = this.homeArray[this.a].direct;
    this.category = this.homeArray[this.a].category;
    this.changeImage();
  }

  // transitions = transition(2);
  intervals = interval(4000);
  changeImage(){
    this.intervals.subscribe(
      ()=>{this.next()}
    )
  }
  

  next(){
    this.a++;
    if (this.a >= this.homeArray.length){
      this.a = 0;
    }
    this.path = this.homeArray[this.a].image;
    this.direct = this.homeArray[this.a].direct;
    this.category = this.homeArray[this.a].category;
  }

  previous(){
    this.a--;
    if (this.a < 0){
      this.a = this.homeArray.length;
    }
    this.path = this.homeArray[this.a].image;
    this.direct = this.homeArray[this.a].direct;
    this.category = this.homeArray[this.a].category;

  }

  constructor(private r:Router){};
  imageDirect(){
    this.r.navigate([this.direct],{
      queryParams:{category:this.category}
    });
  }

}
