import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from 'react-google-maps';



class Map extends Component {
  constructor(props){
    super(props)
  }


  // addMarker(coords) {
  //   var marker = new google.maps.Marker({
  //     position: coords,
  //     map: this.googleMap,
  //     animation: google.maps.Animation.DROP
  //   });
  //   return marker;
  // }


  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
      defaultCenter = { {lat: 55.9533, lng: -4.5} }
      defaultZoom = { 10 }
      >
      <DirectionsRenderer
            directions={this.props.pathForRoute}
       />
      </GoogleMap>
    ));

    return(
      <div id="main-map">
      <GoogleMapExample
      containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
      mapElement={ <div style={{ height: `100%`, width: `100%`}} /> }
      />
      </div>
    );
  }
};
export default Map;
