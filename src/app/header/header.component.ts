import { Component, OnInit,OnChanges, Output, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


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


  constructor(private r:Router, private user:UsersService){}

  accountHolderName!:any;
  ngDoCheck(){
    // this.accountHolderName = localStorage.getItem("user");
    this.accountHolderName = this.user.name;
    // console.log("ngDoCheck : name : "+this.accountHolderName)
  }
  

  //search
  // searchValue:string = "";
  // getSearchValue(searchValue:any){
  //   this.searchValue = searchValue.value;
  //   this.r.navigate(['/search'])
  //   // console.log("parent compnent : "+this.searchValue);
  // }

}
