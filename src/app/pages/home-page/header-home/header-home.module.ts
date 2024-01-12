import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroHeart} from '@ng-icons/heroicons/outline';
import { HeaderHomeComponent } from './header-home.component';
import { MenuComponent } from './menu/menu.component';
import { featherArrowRight,featherMenu , featherSearch, featherUser,featherAirplay} from '@ng-icons/feather-icons';
import {ionNotifications, ionChatboxEllipses, ionPerson, ionHeart} from '@ng-icons/ionicons';
import { NgIconsModule } from '@ng-icons/core';



@NgModule({
  declarations: [HeaderHomeComponent,MenuComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ionNotifications,featherArrowRight,featherMenu,featherAirplay,ionChatboxEllipses, featherSearch, featherUser,ionPerson,ionHeart,heroHeart  }),
  ],
  exports:[HeaderHomeComponent]
})
export class HeaderHomeModule { }
