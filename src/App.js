import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map"
import Logo from "./components/Logo";
import InputBox from "./components/InputBox";
import AppContainer from "./components/AppContainer";
;

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer />
      </div>
    );
  }
}
export default App;
