import React from 'react';

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'],
            signs: ['/', '*', '-', '+', '='],
            display: '',
            lastSelectedSign: null,
            string: ''
        }
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handleNumClick = this.handleNumClick.bind(this);
        this.handleSignClick = this.handleSignClick.bind(this);
    }

    handleClearClick(e) {
        this.setState({
            display: '',
            string: '',
            lastSelectedSign: null
        })
    }

    handleNumClick(e) {
        let num = e.target.innerHTML;
        let newDisplay;
        let newString;

        if (this.state.lastSelectedSign === "=") {
            newString = num
        } else {
            newString = this.state.string.concat(num);
        }
        
        if (this.state.signs.includes(this.state.string[this.state.string.length - 1]) || this.state.lastSelectedSign === "=") {
            newDisplay = num;
        } else {
            newDisplay = this.state.display.toString().concat(num)
        }
        
        this.setState({
            display: newDisplay,
            string: newString,
            lastSelectedSign: null
        })
    }

    handleSignClick(e) {
        let sign = e.target.innerHTML;

        if (sign === "=") {
            let result = eval(this.state.string);
            this.setState({
                display: result,
                string: result.toString(),
                lastSelectedSign: sign
            })
        } else {
            let newString = this.state.string.concat(sign);
            this.setState({
                string: newString,
                lastSelectedSign: sign
            })
        }
    }

    render() {

        const {numbers, signs, display, lastSelectedSign} = this.state

        return (
            <div className="calculator-container">
                <h1 className="calculator-header">React Calculator</h1>
                <div className="calcuator">
                    <div className="calculator-display">
                        <span>{display}</span>
                    </div>
                    <div className="calculator-buttons">
                        <div className="left-buttons">
                            <button className="clear-button" onClick={this.handleClearClick}>clear</button>
                            <div className="num-buttons">
                                {
                                    numbers.map( (num,idx) => {
                                        return (
                                            <button key={idx} 
                                                className={`button-${num}`}
                                                onClick={this.handleNumClick}
                                            >{num}</button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="sign-buttons">
                                {
                                    signs.map( (sign,idx) => {
                                        return (
                                            <button key={idx}
                                                onClick={this.handleSignClick}
                                                className={sign === lastSelectedSign ? "selected-sign" : ''}
                                            >{sign}</button>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Calculator;