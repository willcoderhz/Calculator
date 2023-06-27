import React, { Component } from 'react';

class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.', '+', '-', '*', '/', '=','^','%','!','C'].map((guagua, index) => (
                    <button key={index} onClick={() => this.props.onInput(guagua)}>
                        {guagua}
                    </button>
                ))}
            </div>
        );
    }
}

export default Keypad;
