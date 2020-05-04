import React from 'react';

class Notes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            input: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {

        event.preventDefault()
        
        let noteBody = this.state.input;

        let temp = this.state.notes

        temp.push(noteBody)

        this.setState({
            notes: temp,
            input: ""
        })
    }

    handleRemove(idx) {
        let temp = []

        this.state.notes.forEach( (note,i) => {
            if (i != idx) {
                temp.push(note)
            }
        })

        this.setState({
            notes: temp
        })
    }

    render() {
        return (
            <div className="notes-container">
                <h1 className="notes-header">React Notes</h1>
                <div className="notes">
                    <input type="text" 
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="type note here"
                    />
                    <button onClick={this.handleSubmit}><i className="fas fa-plus"></i></button>
                    <div className="note-items">
                        {
                            this.state.notes.map( (note,idx) => {
                                return (
                                    <div key={idx} className="note-item">
                                        <span>
                                            <i className="far fa-times-circle"
                                                onClick={() => this.handleRemove(idx)}
                                                ></i>
                                        </span>
                                        {note}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;