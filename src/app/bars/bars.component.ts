import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent {

  @Input() hidden!:boolean;
  ngOnInit(){
    this.hidden = true;
  }
  hideBars(){
    this.hidden = true;
  }
  
}
