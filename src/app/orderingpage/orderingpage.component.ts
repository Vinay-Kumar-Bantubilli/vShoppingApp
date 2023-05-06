import { Component, ElementRef } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-orderingpage',
  templateUrl: './orderingpage.component.html',
  styleUrls: ['./orderingpage.component.css']
})
export class OrderingpageComponent {
  
  // condition!:boolean;
  hide:boolean = true;
  intervals = interval(4000);  
  placeTheOrder(){

    this.hide = false;
    this.intervals.subscribe(
      ()=> {
        this.stopDisplaying();
      }
    )
  }
  stopDisplaying(){
    this.hide = true;
  }



}
