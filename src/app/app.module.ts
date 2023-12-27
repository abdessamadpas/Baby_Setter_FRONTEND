import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landingPage/header/header.component';
import { BannerComponent } from './components/landingPage/banner/banner.component';
import { ServiceCardComponent } from './components/landingPage/service-card/service-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { featherArrowRight } from '@ng-icons/feather-icons';
import { featherMenu } from '@ng-icons/feather-icons';

import {ionNotifications} from '@ng-icons/ionicons';
import { FooterComponent } from './components/landingPage/footer/footer.component';
import { ProcessCardComponent } from './components/landingPage/process-card/process-card.component';
import { ProfileCardComponent } from './components/landingPage/profile-card/profile-card.component';
import { HeaderHomeComponent } from './components/homePage/header-home/header-home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServiceCardComponent,
    LandingPageComponent,
    HomePageComponent,
    FooterComponent,
    ProcessCardComponent,
    ProfileCardComponent,
    HeaderHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ ionNotifications,featherArrowRight,featherMenu,featherAirplay }),
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
