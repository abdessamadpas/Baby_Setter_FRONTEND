import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  card1Title = 'Personally screened, reliable babysitters';
  card1Description = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar';
  card1ButtonText = 'Find a Babysitter';
  reverse1 = false;
  image1 = "card1"

  card2Title = 'Newer worry about your babysitter';
  card2Description = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar';
  card2ButtonText = 'See our pricing plan';
  reverse2 = true;
  image2 = "card2"

  card3Title = 'Our quality at home ';
  card3Description = 'Ds simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar';
  card3ButtonText = 'Try it for free';
  reverse3 = false;
  image3 = "card3"

  cardProcessTitle1 = 'SEARCH';
  cardProcessDescription1 = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar';
  cardProcessImage1 = "search"

  cardProcessTitle2 = 'FILTER';
  cardProcessDescription2 = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar';
  cardProcessImage2 = "filter"

  cardProcessTitle3 = 'CHOOSE';
  cardProcessDescription3 = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar';
  cardProcessImage3 = "choose"

  cardProcessTitle4 = 'ORDER';
  cardProcessDescription4 = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standar'; 
  cardProcessImage4 = "order"


  profileCardTitle1 = 'Mona Ehab';
  profileCardImage1 = "profile1"
  profileCardType1 = "babysitter"

  profileCardTitle2 = 'Salma Yousef';
  profileCardImage2 = "profile2"
  profileCardType2 = "nanny"

  profileCardTitle3 = 'Oumnia Ahmed';
  profileCardImage3 = "profile3"
  profileCardType3 = "childminder"

  profileCardTitle4 = 'Alaa Mabrouk';
  profileCardImage4 = "profile4"
  profileCardType4 = "auPair"
  


}
