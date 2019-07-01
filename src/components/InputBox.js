import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
const google = window.google;

class InputBox extends Component{

  constructor(props){
    super(props)
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPostCodeSubmit = this.onPostCodeSubmit.bind(this);
    this.calcNewRoute = this.calcNewRoute.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.renderNewRoute = this.renderNewRoute.bind(this);
    this.state = {
      originPostcode: null,
      destinationPostcode: null,
      originLat: null,
      originLong: null,
      destinationLat: null,
      destinationLong: null,
      result: null
    }


  }


  handleSubmit = function(event){
    event.preventDefault()
    var origin = this.state.originPostcode.trim()
    var destination = this.state.destinationPostcode.trim()
    if(!origin || !destination){
      return
    }
    // this.setState({originPostcode: origin, destinationPostcode: destination})
    //     console.log("state", this.state);
    console.log({origin: origin, destination: destination});
    this.onPostCodeSubmit({origin: origin, destination: destination})
    this.setState({originPostcode: null, destinationPostcode: null})
  }


  fetchData = function(convertedRequestArray){
    fetch("https://api.postcodes.io/postcodes", {
      method: 'POST',
      body: convertedRequestArray,
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => this.calcNewRoute(data));
  }

  onPostCodeSubmit = function(latLng){
    var originPostcode = latLng.origin;
    var destinationPostcode = latLng.destination;
    console.log("input origin", originPostcode);
    console.log("input destination", destinationPostcode);
    var requestArray = [originPostcode, destinationPostcode];
    var requestedObject = {"postcodes": requestArray};
    var convertedRequestArray = JSON.stringify(requestedObject);
    this.fetchData(convertedRequestArray)
  }


  calcNewRoute = function(data) {
    var directionsService = new google.maps.DirectionsService();

    var newOrigin = {lat: data.result[0].result.latitude, lng: data.result[0].result.longitude};
    var newDestination = {lat: data.result[1].result.latitude, lng: data.result[1].result.longitude};
    console.log('calcNewRoute, newOrigin', newOrigin);
    console.log('calcNewRoute, newDestination', newDestination);
    var newOrigin = {lat: data.result[0].result.latitude, lng: data.result[0].result.longitude};
    var newDestination = {lat: data.result[1].result.latitude, lng: data.result[1].result.longitude};
    console.log('calcNewRoute, newOrigin', newOrigin);
    console.log('calcNewRoute, newDestination', newDestination);
    var request = {
      origin: newOrigin,
      destination: newDestination,
      unitSystem: google.maps.UnitSystem.METRIC,
      travelMode: google.maps.TravelMode.DRIVING
    }
    this.props.setRoutePath([newOrigin, newDestination])
//
    directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        console.log(result.routes[0].legs[0].distance.value);
        this.props.setRoutePath(result)
        var pTag = document.querySelector("#distance");
        var calculatedDistance = (result.routes[0].legs[0].distance.value / 1.6) / 1000;
        var roundedDistance = Math.round(calculatedDistance * 100) / 100
        const distanceDisplay = document.querySelector("#distance");
        distanceDisplay.innerText = "Calculated Distance: " + roundedDistance + " miles.";
      }
    })

  };

  renderNewRoute = function(){

  }

  //
  //

  //   directionsService.route(request, function(result, status) {
  //     if (status == 'OK') {
  //       console.log(result.routes[0].legs[0].distance.value);
  //       directionsRenderer.setDirections(result);
  //       var pTag = document.querySelector("#distance");
  //       var calculatedDistance = (result.routes[0].legs[0].distance.value / 1.6) / 1000;
  //       var roundedDistance = Math.round(calculatedDistance * 100) / 100
  //       const distanceDisplay = document.querySelector("#distance");
  //       distanceDisplay.innerText = "Calculated Distance: " + roundedDistance + " miles.";
  //     }
  //   });
  // };






  handleOriginChange = function(event){
    console.log("origin change", event.target.value);
    this.setState({originPostcode: event.target.value});
  }

  handleDestinationChange = function(event){
    console.log("destination change", event.target.value);
    this.setState({destinationPostcode: event.target.value});
  }

  render(){
    return(
      <form className="inputs" id="inputs" onSubmit={this.handleSubmit}>
      <input type="text" id="origin" className="resizedTextbox" placeholder="Origin" onChange={this.handleOriginChange}/>
      <input type="text" id="destination" className="resizedTextbox" placeholder="Destination" onChange={this.handleDestinationChange}/>
      <button id="calculateButton" type="submit" value="Post">Calculate</button>
      <p id="distance">Calulated distance: </p>
      </form>
    )
  }
}

export default InputBox;
