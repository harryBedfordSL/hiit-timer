import React, { Component } from 'react';
import PositiveButton from './buttons/PositiveButton';
import NegativeButton from './buttons/NegativeButton';
import { Link } from 'react-router-dom';
import styles from './Countdown.module.css';

export default class Countdown extends Component {
    render = () => {
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
                        {resting && `Next: ${nextExercise}`}
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
                        size='small'
                    />
                    <Link to="/" className={styles.btn}>
                        <NegativeButton
                            icon={'stop'}
                            onClick={stopTimer}
                            size='small'
                        />
                    </Link>
                </div>
            </div>
        )
    }
}
