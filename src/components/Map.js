import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Map extends Component {

  // state = {
  //   locations: [
  //     { name: "New York County Supreme Court", location: {lat: 40.7143033, lng: -74.0036919} },
  //     { name: "Queens County Supreme Court", location: {lat: 40.7046946, lng: -73.8091145} },
  //     { name: "Kings County Supreme Court", location: {lat: 40.6940226, lng: -73.9890967} },
  //     { name: "Richmond County Supreme Court", location: {lat: 40.6412336, lng: -74.0768597} },
  //     { name: "Bronx Supreme Court", location: {lat: 40.8262388, lng: -73.9235238} }
  //   ],
  //   request: {
  //   origin: newOrigin,
  //   destination: newDestination,
  //   unitSystem: google.maps.UnitSystem.METRIC,
  //   travelMode: google.maps.TravelMode.DRIVING
  //   }
  // }


   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { {lat: 55.9533, lng: -4.5} }
        defaultZoom = { 10 }
      >
      </GoogleMap>
   ));

   return(
      <div id="main-map">
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
