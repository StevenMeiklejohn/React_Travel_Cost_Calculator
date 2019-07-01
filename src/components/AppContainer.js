import React, { Component } from 'react';
import Map from "./Map";
import InputBox from "./InputBox";
import Logo from "./Logo";

class AppContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      pathForRoute: []
    }

    this.setRoutePath = this.setRoutePath.bind(this);
  }



  setRoutePath = function(path){
    console.log('path from InputBox', path);
    this.setState({pathForRoute: path});
  }

  render() {
    return(
      <div id='app_container'>
        <Logo />
        <InputBox setRoutePath={this.setRoutePath}/>
        <Map pathForRoute={this.state.pathForRoute}/>
      </div>
  )
}
}

export default AppContainer;
