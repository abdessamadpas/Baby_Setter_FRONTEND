import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HomePageComponent } from './home-page.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { featherArrowRight } from '@ng-icons/feather-icons';
import { featherMenu } from '@ng-icons/feather-icons';

import {ionNotifications} from '@ng-icons/ionicons';



@NgModule({
  declarations: [
    HomePageComponent,
    HeaderHomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgIconsModule.withIcons({ ionNotifications,featherArrowRight,featherMenu,featherAirplay }),
  ]
})
export class HomePageModule { }
