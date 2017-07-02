import React, {Component} from 'react';
import './index.css';

const TimerAdder = ({onNameChange, onTimeChange, createTimer}) => {

    return (
        <div className="timer-adder">
            <form onSubmit={(event) => createTimer(event)}>
                <input type="text" name="timerName" placeholder="timer name"
                       onChange={ (event) => onNameChange(event.target.name) }/>
                <input type="text" name="" placeholder="time in seconds"
                       onChange={ (event) => onTimeChange(event.target.value) }/>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default TimerAdder;
