import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        };

        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {

        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return (
            <div className="clock">
                <h1 className="clock-header">React Clock</h1>
                <div>
                    <div className="clock-time">
                        <p>Time:</p>
                        <div>{hours} : {minutes} : {seconds} </div>
                    </div>
                    <div className="clock-date">
                        <p>Date:</p>
                        <div>{this.state.time.toDateString()}</div>
                    </div>
                </div>
            </div>
        )
    }


};


export default Clock;