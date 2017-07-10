import React, {Component} from 'react';
import TimerAdder from './timer-adder';
import TimerList from './timer-list';
import './index.css';

class App extends Component {

    constructor() {
        super();
        this.state = {timerName: '', timerTime: 0, nextId: 0, timers: []};
    }

    updateTimerName(name) {
        this.setState({timerName: name});
    }

    updateTimerTime(time) {
        this.setState({timerTime: time});
    }

    createTimer(event) {
        this.state.timers.unshift({id: this.state.nextId++, name: this.state.timerName, time: this.state.timerTime});
        this.setState({timers: this.state.timers});
        event.preventDefault();
    }

    deleteTimer(key) {
        this.setState({timers: this.state.timers.filter(({id}) => id !== key)});
    }


    render() {
        return (<div className="app">
            <TimerAdder
                onNameChange={ (name) => this.updateTimerName(name) }
                onTimeChange={ (time) => this.updateTimerTime(time) }
                createTimer={ (event) => this.createTimer(event) }/>

            <TimerList
                timers={this.state.timers}
                deleteTimer={ this.deleteTimer.bind(this) }/>
        </div>);
    }
}


export default App;
