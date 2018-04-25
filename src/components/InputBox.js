import React, { Component } from 'react';

class InputBox extends Component{

  render(){
    return(
      <div id='inputs'>
      <input type="text" id="origin" class="resizedTextbox" placeholder="Origin"/>
      <input type="text" id="destination" class="resizedTextbox" placeholder="Destination"/>
      <button id="calculateButton">Calculate</button>
      <p id="distance">Calulated distance: </p>
      </div>
    )
  }
}

export default InputBox;
