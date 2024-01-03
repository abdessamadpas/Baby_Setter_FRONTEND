import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() isOpen: boolean = false;
  @Input() options: string[]=[];
  @Output() optionSelected = new EventEmitter<string[]>();

  selectedOptions: { [key: string]: boolean } = {};


  selectAll() {
    this.options.forEach(option => (this.selectedOptions[option] = true));
    this.emitSelectedOptions();
  }
  clearSelection() {
    this.selectedOptions = {};
    this.emitSelectedOptions();
  }

  emitSelectedOptions() {
    const selectedOptions = Object.keys(this.selectedOptions).filter(option => this.selectedOptions[option]);
    this.optionSelected.emit(selectedOptions);
  }

 
  // selectOption(option: string) {
  //   this.isOpen = false;
  //   this.optionSelected.emit(option);
  // }
}
