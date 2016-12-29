export class Init {
  load(){
    if(!localStorage.getItem('markers')){
      console.log("No Marker found creating .....")

      let markers = [
        {
          name:'Company One',
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
          name:'Company Three',
          lat: 34.1870,
          lng: -118.3813,
          draggable: false
        }
      ];

      localStorage.setItem('markers', JSON.stringify(markers))
    } else {
      console.log("Loading Markers ....", localStorage.getItem('markers'))
    }
  }
}