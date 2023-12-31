import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ProcessCardComponent } from './process-card/process-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page.component';
import { NgIconsModule } from '@ng-icons/core';



@NgModule({
  declarations: [
    LandingPageComponent,
    HeaderComponent,
    BannerComponent,
    ProcessCardComponent,
    ProfileCardComponent,
    ServiceCardComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    NgIconsModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
