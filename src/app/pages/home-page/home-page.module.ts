import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderHomeComponent } from './header-home/header-home.component';
import { HomePageComponent } from './home-page.component';

import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {  } from '@ng-icons/feather-icons';
import { featherArrowRight,featherMenu , featherSearch, featherUser,} from '@ng-icons/feather-icons';
import {MatIconModule} from '@angular/material/icon';
import { heroUserPlus } from '@ng-icons/heroicons/outline';
import {ionNotifications, ionChatboxEllipses, ionPerson} from '@ng-icons/ionicons';

import { FilterComponent } from './filter/filter.component';

import { MenuComponent } from './header-home/menu/menu.component';
import { DropdownComponent } from './filter/dropdown/dropdown.component';
import { FilterModule } from './filter/filter.module';
import { HeaderHomeModule } from './header-home/header-home.module';





@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HeaderHomeModule,
    FilterModule,
    NgIconsModule.withIcons({ionNotifications,featherArrowRight,featherMenu,featherAirplay,ionChatboxEllipses, featherSearch, featherUser,ionPerson }),
   
    
  ]
})
export class HomePageModule { }
