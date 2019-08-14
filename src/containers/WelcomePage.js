import React, { Component } from 'react';
import PositiveButton from '../components/buttons/PositiveButton';
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';

export default class WelcomePage extends Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.title}>
                    HIIT Timer
                </div>
                <div className={styles.body}>
                    Welcome
                </div>
                <Link to="/config">
                    <PositiveButton
                        icon={'angle right'}
                        size='big'
                    />
                </Link>
            </div>
        )
    }
}
