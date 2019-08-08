import React, { Component } from 'react';
import styles from './NegativeButton.module.css';

export default class NegativeButton extends Component {    
    render() {
        return (
            <button
                className={styles.negBtn}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </button>
        )
    }
}