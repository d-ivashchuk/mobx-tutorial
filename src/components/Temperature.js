
import React, { Component } from 'react';

class Temperature extends Component {

    render() {
        return (
            <div className="App">
                <div>{this.props.temperature.temperature}</div>
                <div>
                    <button onClick={() => console.log('K')}>K</button>
                    <button onClick={() => console.log('F')}>F</button>
                    <button onClick={() => console.log('C')}>C</button>
                </div>

            </div>
        );
    }
}

export default Temperature;
