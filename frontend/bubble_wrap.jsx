import React from 'react';

class BubbleWrap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bubbleWrap = this.props.bubbleWrap
        }
    }





    render() {
        return(
            <div>
                I am the bubblewrap component
            </div>
        )
    }
};

export default BubbleWrap;

