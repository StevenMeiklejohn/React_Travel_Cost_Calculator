import React, { Component } from 'react';

class InputBox extends Component{

  constructor(props){
    super(props)
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPostCodeSubmit = this.onPostCodeSubmit.bind(this);
    this.state = {
      originPostcode: null,
      destinationPostcode: null,
      originLat: null,
      originLong: null,
      destinationLat: null,
      destinationLong: null
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

  postAjax = function(url, data, success) {
  var params = typeof data === 'string' ? data : Object.keys(data).map(
    function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
  ).join('&');
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState>3 && xhr.status===200) { success(xhr.responseText); }
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(params);
  return xhr;
}

  onPostCodeSubmit = function(latLng){
    var originPostcode = latLng.origin;
    var destinationPostcode = latLng.destination;
    console.log("input origin", originPostcode);
    console.log("input destination", destinationPostcode);
    var requestArray = [originPostcode, destinationPostcode];
    var requestedObject = {"postcodes": requestArray};
    var convertedRequestArray = JSON.stringify(requestedObject);
    this.postAjax('https://api.postcodes.io/postcodes', convertedRequestArray, function(data){
      var parsedData = JSON.parse(data);
      console.log("parsedData", parsedData);
      // this.calcNewRoute(parsedData);
    });
  }


//   calcNewRoute = function(data) {
//   console.log("data", data);
//   var newOrigin = {lat: data.result[0].result.latitude, lng: data.result[0].result.longitude};
//   var newDestination = {lat: data.result[1].result.latitude, lng: data.result[1].result.longitude};
//   console.log('calcNewRoute, newOrigin', newOrigin);
//   console.log('calcNewRoute, newDestination', newDestination);
//
//
//   var request = {
//     origin: newOrigin,
//     destination: newDestination,
//     unitSystem: google.maps.UnitSystem.METRIC,
//     travelMode: google.maps.TravelMode.DRIVING
//   }
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
