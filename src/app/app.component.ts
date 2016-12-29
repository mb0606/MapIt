import { Component } from '@angular/core';


//Marker Type
interface marker {
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Zoom Level
  zoom: number = 10;
  // Starting Position LA
  lat: number = 34.0522;
  lng: number = -118.2437;
  // Markers
  markers: marker[] = [
    {
      name:'Company one',
      lat: 34.0522,
      lng: -118.2437,
      draggable: true
    },
    {
      name:'Company Two',
      lat: 34.024212,
      lng: -118.496475,
      draggable: true
    },
    {
      name:'Company one',
      lat: 34.1870,
      lng: -118.3813,
      draggable: false
    }
  ]
  constructor(){}

  clickedMarker(marker: marker, index: number){
   console.log("Clicked Marker", marker, "index", index)
  }
  mapClicked($event: any){
    let newMarker ={
      name: 'Untitled',
      lat:$event.coords.lat,
      lng:$event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker)
  }
  markerDropEnd(marker: marker, e){
      console.log(marker, e)
  }

}
