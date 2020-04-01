import React from 'react';

class Dice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            dice: this.props.dice
        }

        this.roll = this.roll.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(idx) {

        return (event) => {
            let newDice = Object.assign([], this.state.dice);
    
            let newDie = newDice[idx]
    
            newDie.amount = event.target.value
    
            this.setState({
                dice: newDice
            })
        }
    }

    handleRoll() {
        let total = 0;
        this.state.dice.forEach( dice => {
            total += this.roll(dice.amount, dice.value)
        })
        this.setState({
            total: total
        })
    }

    roll(x = 1, dieNum) {
        let total = 0;
        for (let i = 0; i < x; i++) {
            total += Math.floor(Math.random() * dieNum) + 1
        }
        return total
    };


    render() {

        return (
            <div className="dice-container">
                <h1 className="dice-header">React Dice Roller</h1>
                <div className="dice">
                    {
                        this.props.dice.map( (dice, idx) => {
                            return (
                                <div className="dice-roller" key={idx}>
                                    <i className="fas fa-dice-six fa-spin"></i>
                                    <div className="dice-type">{dice.type}</div>
                                    <input type="text"
                                        value={dice.amount === 0 ? '' : dice.amount}
                                        onChange={this.handleInput(idx)}
                                        placeholder='# of dice'
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={this.handleRoll}>Roll</button>
                <div className="dice-roll-total"><b>Total: </b>{this.state.total === 0 ? '' : this.state.total}</div>
            </div>
        )
    }


};

export default Dice;


class DiceItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dice: this.props.dice
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        return (event) => {
            this.setState({
                amount: event.target.value
            })
        }
    }


    render() {

        let dice = this.state.dice;

        return(
            <div className="dice-roller">
                <i className="fas fa-dice-six fa-spin"></i>
                <div className="dice-type">{dice.type}</div>
                <input type="text"
                    value={dice.value === 0 ? '' : dice.value}
                    onChange={this.handleInput}
                    placeholder='# of dice'
                />
            </div>
        )
    }
}