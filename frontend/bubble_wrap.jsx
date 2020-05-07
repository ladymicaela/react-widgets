import React from 'react';

class BubbleWrap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bubbleWrap: this.props.bubbleWrap
        }
    }

    handlePop(idx) {
        let temp = this.state.bubbleWrap;
        temp[idx] = true

        this.setState({
            bubbleWrap: temp
        })
    }

    render() {
        return(
            <div className="bubble-wrap-container">
                <h1 className="bubble-wrap-header">React Bubble Wrap</h1>
                <div>click on a bubble to pop it</div>
                <div className="bubble-wrap">
                    {
                        this.state.bubbleWrap.map( (bubble,idx) => {
                            return (
                                <div key={idx} className={bubble ? "bubble-popped" : "bubble"} onClick={() => this.handlePop(idx)}>
                                    {
                                        bubble ?
                                            <i className="far fa-circle"></i>
                                            :
                                            <i className="fas fa-circle"></i>
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
};

export default BubbleWrap;

