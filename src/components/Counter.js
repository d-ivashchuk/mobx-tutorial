
import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'



@observer class Counter extends Component {

    render() {
        return (
            <React.Fragment>
                <DevTools />
                <h1>{this.props.store.count}</h1>
                <div>
                    <button onClick={this.handleDec}>{'<'}</button>
                    <button onClick={this.handleInc}>{'>'}</button>
                </div>

            </React.Fragment>

        );
    }
    handleInc = () => {
        this.props.store.increment()
    }

    handleDec = () => {
        this.props.store.decrement()
    }
}

export default Counter;