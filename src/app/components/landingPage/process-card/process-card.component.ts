import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-card',
  templateUrl: './process-card.component.html',
})
export class ProcessCardComponent {
  @Input() title: string = ''  ;
  @Input() image: string = '';
  @Input() description: string = '';
}
