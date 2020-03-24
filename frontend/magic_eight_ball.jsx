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
            <div className="magic-ball-container">
                <h1>React Magic 8 Ball</h1>
                <div className="magic-ball">
                    <div className="magic-ball-window">
                        <div className="magic-ball-dice">

                        </div>
                    </div>
                </div>



            </div>
        )
    }

};

export default MagicEightBall;