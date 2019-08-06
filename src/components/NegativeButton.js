import React, { Component } from 'react';
import styles from './NegativeButton.module.css';

export default class NegativeButton extends Component {    
    render() {
        return (
            <button className={styles.negBtn}>
                {this.props.text}
            </button>
        )
    }
}