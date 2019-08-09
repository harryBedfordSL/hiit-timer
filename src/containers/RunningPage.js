import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DonePage from '../components/DonePage';
import Countdown from '../components/Countdown';

import * as actions from '../actions/actions';

class RunningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            finished: false,
            startPauseIcon: 'play',
            exerciseNumber: 0,
            resting: false,
            secondsLeft: this.props.workTime
        }
        this.startOrPause = this.startOrPause.bind(this)
        this.tick = this.tick.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.startTimer = this.startTimer.bind(this)
    }

    startOrPause() {
        const isRunning = !this.state.running
        let nextText;
        if (isRunning) {
            nextText = 'pause';
            this.startTimer();
        } else {
            nextText = 'play';
            this.stopTimer();
        }
        this.setState({running: isRunning, startPauseIcon: nextText})
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    startTimer() {
        this.timer = setInterval(this.tick, 1000)
    }

    tick() {
        if (this.state.secondsLeft > 0) {this.setState({secondsLeft: this.state.secondsLeft - 1})}
        else {
            this.stopTimer();
            const resting = !this.state.resting;
            const newIndex = resting ? this.state.exerciseNumber : this.state.exerciseNumber + 1;
            this.setState({
                exerciseNumber: newIndex,
                secondsLeft: resting ? this.props.restTime : this.props.workTime,
                resting
            });
            const isAnotherExercise = this.props.exercises[this.state.exerciseNumber] && !(newIndex === this.props.exercises.length-1 && this.state.resting);
            if (isAnotherExercise) {
                this.startTimer();
            } else {
                this.setState({finished: true})
            }
        }
    }

    render() {
        const { exerciseNumber, resting, secondsLeft, startPauseIcon, finished } = this.state;
        return (
            <div>
                {finished
                    ? <DonePage />
                    : <Countdown 
                        resting={resting}
                        exercise={this.props.exercises[exerciseNumber]}
                        secondsLeft={secondsLeft}
                        startPauseIcon={startPauseIcon}
                        startOrPause={this.startOrPause}
                        stopTimer={this.stopTimer}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercises: state.exercises,
    workTime: state.workTime,
    restTime: state.restTime
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RunningPage);
