import React, { Component } from 'react';
import Map from "./Map";
import InputBox from "./InputBox";
import Logo from "./Logo";

class AppContainer extends Component {

  render() {
    return(
      <div id='app_container'>
        <Logo />
        <InputBox />
        <Map />
      </div>
  )
}
}

export default AppContainer;
