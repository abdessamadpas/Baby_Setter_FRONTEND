import { Component } from '@angular/core';
import { HeaderComponent } from './components/landingPage/header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderComponent]
  
})
export class AppComponent {
  title = 'babySitter_frontEnd';
}
