import { Component } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  name1='AIDA'
  description1 = 'Hello! My name is Aida, and I am thrilled to express my interest in the babysitting position. As a dedicated and caring individual.'
  price1='200'
  profile1='profile1'
  // loadLeaflet(): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     const script = document.createElement('script');
  //     script.onload = () => {
  //       resolve();
  //     };
  //     script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  //     document.head.appendChild(script);
  //   });
  // }
  // ngAfterViewInit() {
  //   this.loadLeaflet().then(() => {
  //     this.initMap();
  //   });
  // }

  // initMap() {
  //   if (!navigator.geolocation) {
  //     console.log('La géolocalisation n\'est pas prise en charge');
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const coords = position.coords;
  //       console.log(`lat:${coords.latitude},lon:${coords.longitude}`);
  //       let mymap = L.map('map').setView([coords.latitude, coords.longitude], 13);
  //       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         maxZoom: 19,
  //         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //       }).addTo(mymap);
        
  //       console.log('mapview');
  //     },
  //     (error) => {
  //       console.error('Erreur de géolocalisation:', error);
  //     }
  //   );
    
  //   this.watchPosition();
  // }
  // watchPosition(){
  //   let deslat=0;
  //   let deslon=0;
  //   let id = navigator.geolocation.watchPosition((position)=>{
  //     console.log(`lat:${position.coords.latitude},lon:${position.coords.longitude}`);
  //     if(position.coords.latitude==deslat){
  //       navigator.geolocation.clearWatch(id);
  //     }
  //   },(err)=>{
  //     console.log(err)  ;
      
  //   },{
  //     enableHighAccuracy:false,
  //     timeout:5000,
  //     maximumAge:0
  //   })
  // }
  
  
}
