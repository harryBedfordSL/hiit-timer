import React, { Component } from 'react';
import styles from './TimeSettings.module.css';
import actionType from '../actions/types';

export default class TimeSettings extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const key = event.target.id;
        const value = event.target.value;
        this.props.updateTime(key, value);
    }

    render() {
        return (
            <div>
                Work time: <br/>
                <input 
                    id={actionType.UPDATE_WORK_TIME}
                    className={styles.input}
                    type="number"
                    min="0"
                    max="60"
                    value={this.props.workTime}
                    onChange={this.handleChange}
                />
                <br/><br/>
                Rest time: <br/>
                <input
                    id={actionType.UPDATE_REST_TIME}
                    className={styles.input}
                    type="number"
                    min="0"
                    max="60"
                    value={this.props.restTime}
                    onChange={this.handleChange}    
                />
            </div>
        )
    }
}