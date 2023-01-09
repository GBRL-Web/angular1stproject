import { Component } from '@angular/core';

@Component({
  selector: 'app-happybutton',
  templateUrl: './happybutton.component.html',
  styleUrls: ['./happybutton.component.scss']
})
export class HappybuttonComponent {
  happy: boolean = false;

  toggle = () => { 
    this.happy = !this.happy;
  }
}
