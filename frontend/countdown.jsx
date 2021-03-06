import React from 'react';

class Countdown extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countdowns: [],
            input: "",
            inputDate: "",
            errors: "",
            currentDate: new Date()
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {

        return (event) => {
            this.setState({
                [field]: event.target.value,
                errors: ""
            })
        }
    }

    handleSubmit(event) {

        event.preventDefault()

        let eventName = this.state.input;
        let inputDate = this.state.inputDate

        if (eventName.length == 0 && inputDate.length == 0) {
            this.setState({
                errors: "please enter in event name and date"
            })
            return;
        } else if (eventName.length == 0) {
            this.setState({
                errors: "please enter in event name"
            })
            return;
        } else if (inputDate.length == 0) {
            this.setState({
                errors: "please enter in event date"
            })
            return;
        }

        let temp = this.state.countdowns

        let eventDate = new Date(inputDate)
        let currentDate = this.state.currentDate

        let diff = eventDate.getTime() - currentDate.getTime()

        let timeDiff = diff / (1000 * 3600 * 24)

        let occurred = false

        if (timeDiff <= 0 ) {
            occurred = true
        }

        let eventObj = {
            name: eventName,
            date: inputDate,
            countdown: Math.ceil(timeDiff),
            occurred: occurred
        }

        temp.push(eventObj)

        this.setState({
            countdowns: temp,
            input: "",
            inputDate: "",
            errors: ""
        })
    }

    render() {

        let {input, errors, inputDate, countdowns} = this.state

        return (
            <div className="countdown-container">
                <h1 className="countdown-header">React Countdown</h1>
                <div className="countdown-errors">{errors}</div>
                <div className="countdown-form-container">
                    <label>Event: 
                        <input type="text" 
                            onChange={this.handleChange('input')}
                            className="countdown-event-input"
                            value={input}
                            placeholder="event name"
                        />
                    </label>
                    <label>Date: 
                        <input type="date" 
                            className="countdown-date-picker"
                            onChange={this.handleChange('inputDate')}
                            value={inputDate}
                        />
                    </label>
                    <button onClick={this.handleSubmit} className="countdown-button"><i className="fas fa-calendar-plus"></i></button>
                </div>
                <div className="countdown-events">
                    {
                        countdowns.map( (event,idx) => {
                            let {name, date, occurred, countdown} = event
                            return (
                                <div className="countdown-event" key={idx}>
                                    <div className="countdown-event-name">{name}</div>
                                    <div className="countdown-event-date">{date}</div>
                                    <div className="countdown-event-countdown">
                                        { occurred ? "🥳" : `${countdown} ${countdown < 2 ? "day" : "days"}`}
                                    </div>
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