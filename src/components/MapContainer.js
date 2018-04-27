import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import InputBox from './InputBox';
import MapAlt from './MapAlt';
// import { fetchQuakes } from '../Services/earthquakes'
// import { searchQuakes } from '../Services/earthquakes'
import { GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {

  state = {
    origin: null,
    destination: null
  }

  // componentDidMount = () => {
  //   fetchQuakes()
  //     .then((json) => {
  //       this.setState({ quakes: json.features }, )
  //     })
  // }
  onSubmit = () => {

  }

  // onFilter = (event) => {
  //   searchQuakes(event)
  //     .then((json) => {
  //       this.setState({ quakes: json.features })
  //     })
  // }

  render(props) {
    return (
      <div className="container">
        <div>
          <MapAlt google={this.props.google} coords={this.state} {...props}/>}/>
        </div>
        <div className="inputs">
          <InputBox onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD1pTP5PVOewiF_oUQTCgpr9Ti-LD6M31k',
  libraries: ['visualization']
})(MapContainer)
