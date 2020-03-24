import React from 'react';

class MagicEightBall extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            responses = this.props.responses,
            response = ""
        }
    }




    render() {
        return (
            <div>I am the magic 8 ball component</div>
        )
    }

};

export default MagicEightBall;