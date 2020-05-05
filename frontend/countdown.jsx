import React from 'react';

class Countdown extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countdowns: [],
            input: "",
            date: "",
            errors: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(field) {

        return (event) => {

            this.setState({
                [field]: event.target.value
            })

        }

    }

    handleSubmit(event) {

        event.preventDefault()

        let eventName = this.state.input;

        if (eventName.length == 0) {
            this.setState({
                errors: "please enter in event name"
            })
            return;
        }

        let temp = this.state.events

        let eventObj = {
            name: eventName,
            date: this.state.date
        }

        temp.push(eventObj)

        this.setState({
            notes: temp,
            input: "",
            errors: ""
        })
    }



    render() {
        return (
            <div className="countdown-container">
                <h1 className="countdown-header">React Countdown</h1>
                <div className="countdown-form-container">
                    <label>Event: 
                        <input type="text" 
                            onChange={this.handleChange('input')}
                            className="countdown-event-input"
                            value={this.state.input}
                        />
                    </label>
                    <label>Date: 
                        <input type="date" 
                            className="countdown-date-picker"
                            onChange={this.handleChange('date')}
                            value={this.state.date}
                        />
                    </label>
                    <button onClick={this.handleSubmit} className="countdown-button"><i className="fas fa-calendar-plus"></i></button>
                </div>
                <div className="countdown-events">
                    {
                        this.state.countdowns.map( (event,idx) => {
                            return (
                                <div className="countdown-event" key={idx}>
                                    <div>{event.name}</div>
                                    <div>{event.date}</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
};

export default Countdown;