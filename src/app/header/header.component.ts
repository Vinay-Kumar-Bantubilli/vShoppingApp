import { Component, OnInit,OnChanges, Output, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private r:Router, private user:UsersService){}


  hideBarStatus:boolean = true;
  openSideBars(){
    this.hideBarStatus = false;
    return this.hideBarStatus;
  }
  closeSideBar(){
    this.hideBarStatus = true;
    return this.hideBarStatus;
  }


  hidden!:boolean;
  ngOnInit(){
    this.hidden = true;
  }
  hideBars(){
    this.hidden = true;
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

  accountHolderName!:string;
  ngAfterViewInit(){
    this.accountHolderName = this.user.name;
  }


  logOut(){
    alert("logout successfully")
    this.user.name = '';
  }
  

  //search
  // searchValue:string = "";
  // getSearchValue(searchValue:any){
  //   this.searchValue = searchValue.value;
  //   this.r.navigate(['/search'])
  //   // console.log("parent compnent : "+this.searchValue);
  // }

}
