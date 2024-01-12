import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.css']
})
export class BSCardComponent {
  @Input() name:string ='';
  @Input() description:string ='';
  @Input() price:string ='';
  @Input() image: string = '';
  currentIcon = "heroHeart";
  currentColor = "black";

  changerIcone() {
    if (this.currentIcon === "heroHeart") {
      this.currentIcon = "ionHeart";
      this.currentColor = "#D2122E";
    } else {
      this.currentIcon = "heroHeart";
      this.currentColor = "black";
    }
  }
  }

