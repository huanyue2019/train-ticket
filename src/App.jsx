import React, { createContext, Component } from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

const BatteryContext = createContext();

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {
          battery => <h1>Battery: {battery}</h1>
        }
      </BatteryContext.Consumer>
    );
  }
}

class Middle extends Component {
  render() {
    return <Leaf />;
  }
}

class App extends Component {
  state = {
    battery: 60
  };
  render() {
    const { battery } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <button
          type="button"
          onClick={() => this.setState({ battery: battery - 1 })}>
          press
        </button>
        <Middle />
      </BatteryContext.Provider>
    );
  }
}

export default App;
