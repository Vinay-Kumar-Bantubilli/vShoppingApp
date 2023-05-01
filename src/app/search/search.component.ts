import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private ps:ProductsService, private ar:ActivatedRoute, private r:Router){}
  products = this.ps.products;

  searchValue!:string;
  toDirect!:string;

  assignSearchValue(searchValue:any){
    this.searchValue = searchValue.value;
    
    for(let a of this.products){
      // console.log(a.category)
      if (a.category.toLowerCase().includes(this.searchValue)){
        this.r.navigate(['/products'],{
          queryParams:{category:a.category}
        })
      }
    }
    console.log("Search Value : "+this.searchValue);
    console.log("direct : "+this.toDirect);
  }
}
