import React from 'react';

class MagicEightBall extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            response: ""
        }
    }


    askQuestion() {
        const responses = this.props.responses;
        let randomResponse = responses[Math.floor(Math.random() * responses.length)];
        this.setState({
            response: randomResponse
        })

    }


    render() {
        return (
            <div></div>
        )
    }

};

export default MagicEightBall;