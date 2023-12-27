import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  @Input() title: string = ''  ;
  @Input() image: string = '';
  @Input() type: string = '';

}
