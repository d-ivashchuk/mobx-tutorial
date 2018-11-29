
import React, { Component } from 'react';
import { action } from 'mobx'
import { observer } from "mobx-react";

@observer class Temperature extends Component {

    render() {
        return (
            <div className="App">
                <div onClick={this.onTemperatureClick}>{this.props.temperature.temperature}</div>
                <div>
                    <button onClick={() => this.onUnitClick('K')}>K</button>
                    <button onClick={() => this.onUnitClick('F')}>F</button>
                    <button onClick={() => this.onUnitClick('C')}>C</button>
                </div>

            </div>
        );
    }
    @action
    onTemperatureClick = () => {
        this.props.temperature.inc();
    };
    @action
    onUnitClick = (unit) => {
        this.props.temperature.setUnit(unit)
    };
}

export default Temperature;
