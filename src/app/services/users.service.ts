import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  // users = []
  name!:string;
  password!:string;

  storeUsers(user:any){
    this.name = user.name;
    this.password = user.password;
    // this.users = user;
    localStorage.setItem("name",this.name);
  }

}
