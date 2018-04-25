import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map"
import Logo from "./components/Logo";
import InputBox from "./components/InputBox";
;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <InputBox/>
        <Map/>
      </div>
    );
  }
}
export default App;
