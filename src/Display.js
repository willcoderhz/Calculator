import React, { Component } from 'react';

class Display extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'0'
        };
    }
    render() {
        return (
            <div className="Display">
                <div className="result">{this.props.result}</div>
                <div className="input">{this.props.input}</div>
            </div>
        );
    }
}

export default Display;
