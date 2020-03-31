import React from 'react';

class Dice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numDie: 0,
            total: 0
        }

        this.roll = this.roll.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            numDie: event.target.value
        })
    }

    handleRoll() {
        let total = this.roll(this.state.numDie, 6);
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
                <div className="dice-roller">
                    <i className="fas fa-dice-six"></i>
                    <input type="text"
                        value={this.state.numDie === 0 ? '' : this.state.numDie}
                        onChange={this.handleInput}
                        placeholder='Number of dice...'
                    />
                    <button onClick={this.handleRoll}>Roll</button>
                </div>
                <div className="dice-roll-total">{this.state.total === 0 ? '' : this.state.total}</div>
            </div>
        )
    }


};

export default Dice;