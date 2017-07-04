import React from 'react';
import Timer from '../timer';
import './index.css';

const TimerList = ({timers, deleteTimer}) => {

    return (
        <div className="timer-list">
            { timers.map( ({id, name, time}) => <Timer key={id} name={name} time={time} deleteTimer={() => deleteTimer(id) } /> ) }
        </div>
    );
}

export default TimerList;
