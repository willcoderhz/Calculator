import React, {Component} from 'react';
import { Title } from './Title';
import Display from './Display';
import Keypad from './Keypad';  


class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(buttonValue) {
        if (buttonValue==='C'){
            this.setState({
                input: '',
                result: ''
            });
        }
        else if (buttonValue === '=') {
            // 如果用户点击了等号，计算结果
            try {
                this.setState({
                    result: eval(this.state.input),
                    input: ''
                });
            } catch (error) {
                this.setState({
                    result: 'Error'
                });
            }
        } else {
            // 如果用户点击了其他按钮，更新输入
            this.setState({
                input: this.state.input + buttonValue
            });
        }
    }
    
    render(){
        return(
            <div className='Calculator'>
                <Title />
                <Display  input={this.state.input} 
                    result={this.state.result}/>
                <Keypad onInput={this.handleInput}/>
            </div>
        )
    }
}

export default Calculator