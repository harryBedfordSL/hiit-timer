import React, { Component } from 'react';
import styles from './TimeSettings.module.css';

export default class TimeSettings extends Component {
    render() {
        return (
            <form>
                Work time: <br/>
                <input className={styles.input} type="number" min="0" max="60" />
                <br/><br/>
                Rest time: <br/>
                <input className={styles.input} type="number" min="0" max="60" />
            </form>
        )
    }
}