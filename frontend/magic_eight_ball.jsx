import React from 'react';

class MagicEightBall extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            response: "",
            spin: false
        }
        this.answerQuestion = this.answerQuestion.bind(this);
        this.askQuestion = this.askQuestion.bind(this);
    }

    askQuestion() {
        this.setState({
            response: "",
            spin: true
        },
            () => setTimeout(this.answerQuestion,2000)
        )
        ;
    }

    answerQuestion() {
        const responses = this.props.responses;
        let randomResponse = responses[Math.floor(Math.random() * responses.length)];
        this.setState({
            response: randomResponse,
            spin: false
        })
    }

    render() {

        const {response, spin} = this.state;

        let spinning = spin ? "magic-ball-dice spin" : "magic-ball-dice"

        return (
            <div className="magic-ball-container">
                <h1 className="magic-ball-header">React Magic 8 Ball</h1>
                <p className="magic-ball-info">Ask a question and click the magic 8 ball...</p>
                <div className="magic-ball" onClick={this.askQuestion}>
                    <div className="magic-ball-window">
                        <div className={`${spinning}`}></div>
                        <div className="magic-ball-response">{response}</div>
                    </div>
                </div>



            </div>
        )
    }

};

export default MagicEightBall;