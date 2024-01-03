import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [FilterComponent, DropdownComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FilterComponent]
})
export class FilterModule { }
