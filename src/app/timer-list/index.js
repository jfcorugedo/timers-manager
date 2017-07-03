import React from 'react';
import Timer from '../timer';
import './index.css';

const TimerList = ({timers}) => {

    return (
        <div className="timer-list">
            { timers.map( (timer, index) => <Timer key={index} name={timer.name} time={timer.time} /> ) }
        </div>
    );
}

export default TimerList;
