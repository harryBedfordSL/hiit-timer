import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ percentageLeft, secondsLeft, resting, totalTime }) => {
    const appliedRadius = 175;
    const appliedStroke = 10;
    const normalizedRadius = appliedRadius - appliedStroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentageLeft / 100) * circumference;
    const outerStroke = resting ? '#ffffff' : '#282c34';
    const innerStroke = resting ? '#282c34' : '#ffffff';
    const transition = parseInt(secondsLeft) === totalTime ? 'none' : 'stroke-dashoffset 0.1s linear'
    const displayNumber = secondsLeft < 10 
        ? parseFloat(secondsLeft).toFixed(1).toString().padStart(4, 0)
        : parseFloat(secondsLeft).toFixed(1)

    return (
        <div id="react-progress-circle">
            <svg height={appliedRadius * 2} width={appliedRadius * 2}>
                <g>
                    <circle
                        className={styles.tracker}
                        strokeWidth={appliedStroke}
                        style={{ strokeDashoffset, stroke: outerStroke }}
                        r={normalizedRadius}
                        cx={appliedRadius}
                        cy={appliedRadius}
                    />
                    <circle
                        className={styles.innerTracker}
                        strokeWidth={appliedStroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset, transition, stroke: innerStroke }}
                        r={normalizedRadius}
                        cx={appliedRadius}
                        cy={appliedRadius}
                    />  
                </g>
            </svg>
            <div className={styles.secondsLeft}>
                {displayNumber}
            </div>
        </div>
    );
};

export default ProgressBar;
