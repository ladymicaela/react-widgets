import React from 'react';

class AutoComplete extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputVal: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(event) {
        this.setState({
            inputVal: event.target.value
        })
    }

    handleClick(event) {
        this.setState({
            inputVal: event.target.innerText
        })
    }

    matches() {
        let matches = [];

        if (this.state.inputVal.length === 0) {
            return this.props.names;
        }

        this.props.names.forEach(name => {
            let prefix = name.slice(0, this.state.inputVal.length);
            if (prefix.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }

        return matches;
    }


    render() {
        
        let names = this.matches();

        return (
            <div className="auto">
                <h1 className="auto-header">React Autocomplete</h1>
                <input
                    className="auto-input"
                    value={this.state.inputVal}
                    onChange={this.handleInput}
                    placeholder='Search...'
                />
                <ul className="names">
                    {
                        names.map( (name,index) => (
                            <li key={index}
                                onClick={this.handleClick}
                            >
                                {name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

};

export default AutoComplete;