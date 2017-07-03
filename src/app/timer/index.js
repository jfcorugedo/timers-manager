import React, {Component} from 'react';
import numeral from 'numeral';
import classNames from 'classnames';
import './index.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        const {name, time} = props;
        this.state = {name, time, finished: false}
    }

    componentDidMount() {
        this.next();
    }

    next() {
        setTimeout(() => this.tick(), 1000);
    }

    tick() {
        this.state.time--;
        if(this.state.time === 0) {
            this.setState({time:this.state.time, finished: true});
        } else {
            this.setState({time:this.state.time});
            this.next();
        }
    }

    render() {
        const {name, time, finished} = this.state;

        return (
            <div className={classNames("timer", { finished }) }>
                <h2 className="name">{ name }</h2>
                <div className="time">{ numeral(time).format('00:00:00') }</div>
            </div>
        );
    }
}

export default Timer;
