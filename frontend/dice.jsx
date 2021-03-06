import React from 'react';

class Dice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            dice: this.props.dice,
            error: ''
        }

        this.roll = this.roll.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClear = this.handleClear.bind(this);
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

        if (this.state.dice.every( dice => dice.amount === 0)) {
            this.setState({
                error: "Please enter the amount of dice you wish to roll"
            })
        } else {
            let total = 0;
            let newDice = Object.assign([], this.state.dice);
    
            this.state.dice.forEach( (dice,idx) => {
                let sum = this.roll(dice.amount, dice.value)
                let die = newDice[idx];
                die.total = sum;
                this.setState({
                    dice: newDice,
                    error: ''
                })
                total += sum
            })
    
            this.setState({
                total: total
            })
        }

    }

    roll(x = 1, dieNum) {
        let total = 0;

        for (let i = 0; i < x; i++) {
            total += Math.floor(Math.random() * dieNum) + 1
        }

        return total
    }

    handleClear() {
        this.setState({
            dice: [
                { type: "D4", value: 4, total: 0, amount: 0 },
                { type: "D6", value: 6, total: 0, amount: 0 },
                { type: "D8", value: 8, total: 0, amount: 0 },
                { type: "D10", value: 10, total: 0, amount: 0 },
                { type: "D12", value: 12, total: 0, amount: 0 },
                { type: "D20", value: 20, total: 0, amount: 0 },
            ],
            total: 0
        })
    }

    render() {

        let {dice, total, error} = this.state;

        return (
            <div className="dice-container">
                <h1 className="dice-header">React Dice Roller</h1>
                <div className="dice">
                    {
                        dice.map( (die, idx) => {
                            return (
                                <div className="dice-roller" key={idx}>
                                    <i className="fas fa-dice-six fa-spin"></i>
                                    <div className="dice-type">{die.type}</div>
                                    <input type="text"
                                        value={die.amount === 0 ? '' : die.amount}
                                        onChange={this.handleInput(idx)}
                                        placeholder='# to roll'
                                    />
                                    <div className="dice-total">{die.total}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="dice-container-footer">
                    <div className="dice-buttons">
                        <button onClick={this.handleRoll}>Roll</button>
                        <button onClick={this.handleClear}>Clear</button>
                    </div>
                    <div className="dice-error">{error}</div>
                    <div className="dice-roll-total"><b>Total: </b>{total === 0 ? '' : total}</div>
                </div>
            </div>
        )
    }
};

export default Dice;