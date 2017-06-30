import React, {Component} from 'react';
import './index.css';

class App extends Component {

    constructor() {
        super();
        this.state = {timerName: '', timerTime: 0};
    }

    updateTimerName(event) {
        this.setState({timerName: event.target.value});
    }

    updateTimerTime(event) {
        this.setState({timerTime: event.target.value});
    }

    createTimer(event) {
        alert(this.state.timerName + ' ' + this.state.timerTime);
        event.preventDefault();
    }

    render() {
        return (
            <div className="app">
                <div className="timer-adder">
                    <form onSubmit={(event) => this.createTimer(event)}>
                        <input type="text" name="timerName" placeholder="timer name"
                               onChange={(event) => this.updateTimerName(event)}/>
                        <input type="text" name="" placeholder="time in seconds"
                               onChange={(event) => this.updateTimerTime(event)}/>
                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
