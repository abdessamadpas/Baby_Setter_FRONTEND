import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  @Input() title: string = '';

  toggleMobileMenu() {
    console.log('toggleMobileMenu', this.isMobileMenuOpen);
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
