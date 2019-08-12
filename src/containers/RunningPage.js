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
            isRunning: false,
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
        const { isRunning } = this.state;
        if (isRunning) {
            this.stopTimer();
            this.setState({isRunning: !isRunning, startPauseIcon: 'play'});
        } else {
            this.startTimer();
            this.setState({isRunning: !isRunning, startPauseIcon: 'pause'});
        }
    }

    stopTimer() {
        clearInterval(this.timer)
    }

    startTimer() {
        this.timer = setInterval(this.tick, 1000)
    }

    tick() {
        const { secondsLeft, resting, exerciseNumber } = this.state;
        const { restTime, workTime, exercises } = this.props;
        if (secondsLeft > 0) {this.setState({secondsLeft: secondsLeft - 1})}
        else {
            this.stopTimer();
            const newExerciseNumber = resting ? exerciseNumber + 1 : exerciseNumber;
            this.setState({
                exerciseNumber: newExerciseNumber,
                secondsLeft: resting ? workTime : restTime,
                resting: !resting
            });
            const isAnotherExercise = exercises[exerciseNumber] && (newExerciseNumber !== exercises.length-1 || resting);
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
                        currentExercise={this.props.exercises[exerciseNumber]}
                        nextExercise={this.props.exercises[exerciseNumber+1]}
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
    exercises: state.config.exercises,
    workTime: state.config.workTime,
    restTime: state.config.restTime
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RunningPage);
