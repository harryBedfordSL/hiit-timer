import React, { Component } from 'react';
import PositiveButton from './buttons/PositiveButton';
import NegativeButton from './buttons/NegativeButton';
import { Link } from 'react-router-dom';
import styles from './Countdown.module.css';
import ProgressBar from './ProgressBar';

export default class Countdown extends Component {
    render = () => {
        const { resting, currentExercise, nextExercise, secondsLeft, totalTime, startPauseIcon, startOrPause, stopTimer, sets, currentSet, theme } = this.props;
        const percentLeft = ((secondsLeft) / totalTime) * 100;
        return (
            <div className={styles.page} style={theme.page}>
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
                <ProgressBar
                    percentageLeft={percentLeft}
                    totalTime={totalTime}
                    secondsLeft={secondsLeft}
                    resting={resting}
                />
                <div>
                    Set: {currentSet} / {sets}
                </div>
                <div className={styles.interactionBar}>
                    <PositiveButton
                        className={styles.btn}
                        icon={startPauseIcon}
                        onClick={startOrPause}
                        size='big'
                    />
                    <Link to="/welcome" className={styles.btn}>
                        <NegativeButton
                            icon={'stop'}
                            onClick={stopTimer}
                            size='big'
                        />
                    </Link>
                </div>
            </div>
        )
    }
}
