
import React, { Component } from 'react';
// import { action } from 'mobx'
import { observer } from "mobx-react";

@observer class Temperature extends Component {

    render() {
        const list = this.props.allToDos.list
        return (
            <div className="App">
                <div>{list.map(element =>
                    <p key={element}>{element}</p>
                )}</div>
            </div>
        );
    }
}

export default Temperature;