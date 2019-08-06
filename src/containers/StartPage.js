import React, { Component } from 'react';
import PositiveButton from '../components/PositiveButton';
import { Link } from 'react-router-dom';
import styles from './StartPage.module.css'
import TimeSettings from './TimeSettings';
import Exercises from './Exercises';

export default class StartPage extends Component {
    render() {
        return (
            <div className={styles.page}>
                <header className={styles.title}>
                    HIIT Timer
                </header>
                <div className={styles.content}>
                    <Exercises />
                    <TimeSettings />
                    <Link to="/running" className={styles.startBtn}>
                        <PositiveButton text={"Start"} disabled={false}/>
                    </Link>
                </div>
            </div>
        );
    }
}
