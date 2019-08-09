import React, { Component } from 'react';
import PositiveButton from './PositiveButton';
import NegativeButton from './NegativeButton';
import { Link } from 'react-router-dom';
import styles from './Countdown.module.css';

export default class Countdown extends Component {
    render() {
        const { resting, currentExercise, nextExercise, secondsLeft, startPauseIcon, startOrPause, stopTimer } = this.props;
        return (
            <div className={styles.page}>
                <div>
                    <header className={styles.title}>
                        {resting 
                            ? "Rest"
                            : currentExercise
                        }
                    </header>
                    <div className={styles.upNext}>
                        {resting && `Next up: ${nextExercise}`}
                    </div>
                </div>
                <div className={styles.timer}>
                    {secondsLeft}
                </div>
                <div className={styles.interactionBar}>
                    <PositiveButton
                        className={styles.btn}
                        icon={startPauseIcon}
                        onClick={startOrPause}
                    />
                    <Link to="/" className={styles.btn}>
                        <NegativeButton icon={'stop'} onClick={stopTimer} />
                    </Link>
                </div>
            </div>
        )
    }
}
