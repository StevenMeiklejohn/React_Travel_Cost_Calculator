import React, { Component } from 'react';

class InputBox extends Component{

  constructor(props){
    super(props)
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      originPostcode: null,
      destinationPostcode: null
    }
  }


  handleSubmit = function(event){
    event.preventDefault()
    var origin = this.state.originPostcode.trim()
    var destination = this.state.destinationPostcode.trim()
    if(!origin || !destination){
      return
    }
    this.setState({originPostcode: origin, destinationPostcode: destination})
        console.log("state", this.state);
    // this.props.onPostCodeSubmit({origin: origin, destination: destination})
    // this.setState({originPostcode: null, destinationPostcode: null})
  }



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
