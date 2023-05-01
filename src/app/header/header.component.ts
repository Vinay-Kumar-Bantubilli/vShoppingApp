import { Component, OnInit,OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  hideBarVar:boolean = true;
  openBar(){
    this.hideBarVar = false;
    return this.hideBarVar;
  }

  closeBar(){
    this.hideBarVar = true;
    return this.hideBarVar;
  }

  hideUserVar:boolean = true;
  openUser(){
    this.hideUserVar = false;
    return this.hideUserVar;
  }
  closeUser(){
    this.hideUserVar = true;
    return this.hideUserVar;
  }


  constructor(private r:Router){}
  //search
  // searchValue:string = "";
  // getSearchValue(searchValue:any){
  //   this.searchValue = searchValue.value;
  //   this.r.navigate(['/search'])
  //   // console.log("parent compnent : "+this.searchValue);
  // }

}
