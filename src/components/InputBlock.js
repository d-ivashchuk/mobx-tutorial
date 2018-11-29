
import React, { Component } from 'react';
import { action, observable } from 'mobx'
import { observer } from "mobx-react";

@observer class InputBlock extends Component {

    @observable input = "";

    render() {
        return (
            <form>
                <input onChange={this.onChange} value={this.input} />
                <button onClick={this.onSubmit}>Add</button>
            </form>
        );
    }
    @action
    onChange = e => {
        this.input = e.target.value;
    };

    @action
    onSubmit = e => {
        e.preventDefault()
        this.input = "";
    };
}

export default InputBlock;