import React from 'react';

class BubbleWrap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bubbleWrap: this.props.bubbleWrap
        }

        // this.handleInflate = this.handleInflate.bind(this)
    }

    handlePop(idx) {
        let temp = this.state.bubbleWrap;
        temp[idx] = true

        this.setState({
            bubbleWrap: temp
        })
    }

    // handleInflate(event) {

    //     event.preventDefault()

    //     this.setState({
    //         bubbleWrap: Array(81).fill(false)
    //     })

    // }

    render() {
        return(
            <div className="bubble-wrap-container">
                <h1 className="bubble-wrap-header">React Bubble Wrap</h1>
                <div>click on a bubble to pop it</div>
                <div className="bubble-wrap">
                    {
                        this.state.bubbleWrap.map( (bubble,idx) => {
                            return (
                                <div key={idx} className="bubble" onClick={() => this.handlePop(idx)}>
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
                {/* <button className="inflate-button" onClick={this.handleInflate}>Inflate <i className="fas fa-wind"></i></button> */}
            </div>
        )
    }
};

export default BubbleWrap;

