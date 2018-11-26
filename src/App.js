/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import { observable, computed, action } from 'mobx'
import Counter from './components/Counter'
import Temperature from './components/Temperature'

const appState = observable({
  count: 0
})
appState.increment = function () {
  this.count++;
}
appState.decrement = function () {
  this.count--;
}

const t = new class Temperature {
  // Change unit to compute new value from given state.

  @observable unit = "K";
  @observable temperatureCelsius = 25;

  @computed get temperatureKelvin() {
    console.log("calculating Kelvin")
    return this.temperatureCelsius * (9 / 5) + 32
  }

  @computed get temperatureFahrenheit() {
    console.log("calculating Fahrenheit")
    return this.temperatureCelsius + 273.15
  }

  @computed get temperature() {
    console.log("calculating temperature")
    switch (this.unit) {
      case "K": return this.temperatureKelvin + "ºK"
      case "F": return this.temperatureFahrenheit + "ºF"
      case "C": return this.temperatureCelsius + "ºC"
    }
  }
  @action("update unit") setUnit(newUnit) {
    this.unit = newUnit;
  }

  @action("update temperature") setCelsius(degrees) {
    this.temperatureCelsius = degrees;
  }

  @action("update temperature and unit")
  setTemperatureAndUnit(degrees, unit) {
    this.setCelsius(degrees);
    this.setUnit(unit);
  }
}



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter store={appState} />
          <Temperature temperature={t} />
        </header>
      </div>
    );
  }
  handleInc = () => {
    this.props.store.increment()
  }

  handleDec = () => {
    this.props.store.decrement()
  }
}

export default App;
