import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    runTimer() {
        const userNumber = document.getElementById('number').value
        this.setState({
            counter: userNumber
        })
        const interval = setInterval(() => {
            if (this.state.counter > 0) {
                this.setState({
                    counter: this.state.counter - 1
                })
            } else {
                clearInterval(interval)
            }
        }, 1000)
    }
    render() {
        return (
            <div>
                <input id="number" type="number" />
                <input onClick={this.runTimer.bind(this)} type="button" value="Start" />
                <p>{this.state.counter}</p>
            </div>
        )
    }
}
ReactDOM.render(
    <Timer />,
    document.getElementById('root')
)