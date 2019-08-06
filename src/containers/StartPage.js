import React, { Component } from 'react';
import PositiveButton from '../components/PositiveButton';
import { Link } from 'react-router-dom';
import styles from './StartPage.module.css'
import Settings from '../components/Settings';

export default class StartPage extends Component {
    render() {
        return (
            <div className={styles.page}>
                <header className={styles.title}>
                    HIIT Timer
                </header>
                <div className={styles.content}>
                    <Settings />
                    <Link to="/running">
                        <PositiveButton text={"Start"} />
                    </Link>
                </div>
            </div>
        );
    }
}
