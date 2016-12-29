import { Component } from '@angular/core';
import {MarkerService} from "./services/marker.service";


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
  markers: marker[]

  constructor(private _markerService: MarkerService){
    this.markers = this._markerService.getMarkers()
  }

  clickedMarker(marker: marker, index: number){
   console.log("Clicked Marker", marker, "index", index)
  }
  mapClicked($event: any){
    console.log($event)
    let newMarker ={
      name: 'Untitled',
      lat:$event.coords.lat,
      lng:$event.coords.lng,
      draggable: false
    }
    this.markers.push(newMarker)
  }
  markerDragEnd(marker: marker, $event): void{
    var updatedMarker = {
      lat: +marker.lat,
      lng: +marker.lng,
      draggable: false
    }
    let newLat = $event.coords.lat;
    let newLng =  $event.coords.lng;
    this._markerService.updateMarker(updatedMarker, newLat, newLng);
  }
  addMarker(marker: any): void{
    console.log(marker)
    let newMarker = {
      name: marker.markerName,
      lat: +marker.markerLat,
      lng: +marker.markerLng,
      draggable:  false
    }
    if (marker.markerDrag == "yes" ) {
      newMarker.draggable = true;
    }
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  removeMarker(marker, i){
    this.markers.splice(i,1);
    this._markerService.deleteMarker(marker);
  }

}
