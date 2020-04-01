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
        let total = 0;
        let newDice = Object.assign([], this.state.dice);

        this.state.dice.forEach( (dice,idx) => {
            let sum = this.roll(dice.amount, dice.value)
            let die = newDice[idx];
            die.total = sum;
            this.setState({
                dice: newDice
            })
            total += sum
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

        return (
            <div className="dice-container">
                <h1 className="dice-header">React Dice Roller</h1>
                <div className="dice">
                    {
                        this.state.dice.map( (dice, idx) => {
                            return (
                                <div className="dice-roller" key={idx}>
                                    <i className="fas fa-dice-six fa-spin"></i>
                                    <div className="dice-type">{dice.type}</div>
                                    <input type="text"
                                        value={dice.amount === 0 ? '' : dice.amount}
                                        onChange={this.handleInput(idx)}
                                        placeholder='# to roll'
                                    />
                                    <div className="dice-total">{dice.total}</div>
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
                    <div className="dice-roll-total"><b>Total: </b>{this.state.total === 0 ? '' : this.state.total}</div>
                </div>
            </div>
        )
    }

};

export default Dice;