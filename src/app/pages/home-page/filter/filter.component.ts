import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  isDropdownOpen = false;
  filterOptions: string[] =  ['Option 1', 'Option 2', 'Option 3', 'Option 4'];  
  selectedOptions: string[] = [];
 
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectOption(options: string[]) {
    this.selectedOptions = options;
    this.isDropdownOpen = false;
  }
}
