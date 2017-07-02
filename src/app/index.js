import React, {Component} from 'react';
import TimerAdder from './timer-adder';
import './index.css';

class App extends Component {

    constructor() {
        super();
        this.state = { timerName:'', timerTime: 0 };
    }

    updateTimerName(name) {
        this.setState({ timerName: name });
    }

    updateTimerTime(time) {
        this.setState({ timerTime: time });
    }

    createTimer(event) {
        alert(this.state.timerName + ' ' + this.state.timerTime);
        event.preventDefault();
    }

    render() {
        return (<div className="app">
            <TimerAdder
                onNameChange={ (name) => this.updateTimerName(name) }
                onTimeChange={ (time) => this.updateTimerTime(time) }
                createTimer={ (event) => this.createTimer(event) } />
        </div>);
    }
}
;


export default App;
