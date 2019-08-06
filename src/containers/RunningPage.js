import React, { Component } from 'react';
import NegativeButton from '../components/NegativeButton';
import { Link } from 'react-router-dom';
import styles from './RunningPage.module.css';

export default class StartPage extends Component {
    render() {
        return (
            <div className={styles.page}>
                <header>
                    Running Page
                </header>
                <Link to="/">
                    <NegativeButton text={"Stop"} />
                </Link>
            </div>
        );
    }
}
