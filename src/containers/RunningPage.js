import React, { Component } from 'react';
import NegativeButton from '../components/NegativeButton';
import { Link } from 'react-router-dom';
import styles from './RunningPage.module.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PositiveButton from '../components/PositiveButton';

import * as actions from '../actions/actions';

let timer;

class RunningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Running: false,
            StartPause: "Start",
            index: 0,
            currentExercise: this.props.exercises[0],
            resting: false,
            secondsLeft: this.props.workTime
        }
        this.StartOrPause = this.StartOrPause.bind(this)
        this.tick = this.tick.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.startTimer = this.startTimer.bind(this)
    }

    StartOrPause() {
        const isRunning = !this.state.Running
        let nextText;
        if (isRunning) {
            nextText = "Pause";
            this.startTimer();
        } else {
            nextText = "Start"
            this.stopTimer();
        }
        this.setState({Running: isRunning, StartPause: nextText})
    }

    stopTimer() {
        clearInterval(timer)
    }

    startTimer() {
        timer = setInterval(this.tick, 1000)
    }

    tick() {
        if (this.state.secondsLeft > 0) {this.setState({secondsLeft: this.state.secondsLeft - 1})}
        else {
            this.stopTimer();
            const resting = !this.state.resting;
            const newIndex = resting ? this.state.index : this.state.index + 1;
            this.setState({
                index: newIndex,
                currentExercise: resting ? "Rest" : this.props.exercises[newIndex],
                secondsLeft: resting ? this.props.restTime : this.props.workTime,
                resting
            });
            const isAnotherExercise = this.state.currentExercise && !(newIndex === this.props.exercises.length-1 && this.state.resting);
            if (isAnotherExercise) {
                this.startTimer();
            } else {
                this.setState({currentExercise: "Done", secondsLeft: 0, resting: false})
            }
        }
    }

    render() {
        return (
            <div className={styles.page}>
                <header className={styles.title}>
                    {this.state.resting 
                        ? "Rest" 
                        : this.state.currentExercise
                    }
                </header>
                <div className={styles.timer}>
                    {this.state.secondsLeft}
                </div>
                <div className={styles.interactionBar}>
                    <PositiveButton
                        className={styles.btn}
                        text={this.state.StartPause}
                        onClick={this.StartOrPause}
                    />
                    <Link to="/" className={styles.btn}>
                        <NegativeButton text={"Stop"} onClick={this.stopTimer} />
                    </Link>
                </div>
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
