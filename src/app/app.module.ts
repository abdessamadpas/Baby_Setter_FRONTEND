import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { featherArrowRight } from '@ng-icons/feather-icons';
import { featherMenu } from '@ng-icons/feather-icons';

import {ionNotifications} from '@ng-icons/ionicons';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FilterModule } from './pages/home-page/filter/filter.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomePageModule, 
    LandingPageModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatIconModule
  ],

  providers: [
    provideClientHydration(),
    provideNgIconsConfig({
      size: '1.5em',
      color: 'red',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
