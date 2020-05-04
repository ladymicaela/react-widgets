import React from 'react';

class Notes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            input: "",
            errors: ""
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

        if (noteBody.length == 0) {
            this.setState({
                errors: "note cannot be blank"
            })
            return;
        }

        let temp = this.state.notes

        temp.push(noteBody)

        this.setState({
            notes: temp,
            input: "",
            errors: ""
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
                    <div className="notes-form-container">
                        <div className="notes-errors">{this.state.errors}</div>
                        <div className="notes-form">
                            <input type="text" className="notes-input"
                                value={this.state.input}
                                onChange={this.handleChange}
                                placeholder="type note here"
                            />
                            <button onClick={this.handleSubmit} className="notes-button"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="note-items">
                        {
                            this.state.notes.map( (note,idx) => {
                                return (
                                    <div key={idx} className="note-item">
                                        <div className="note-item-remove">
                                            <i className="far fa-times-circle"
                                                onClick={() => this.handleRemove(idx)}
                                                ></i>
                                        </div>
                                        <div className="note-body">
                                            {note}
                                        </div>
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