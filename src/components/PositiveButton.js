import React, { Component } from 'react';
import styles from './PositiveButton.module.css';

export default class PositiveButton extends Component {    
    render() {
        return (
            <button
                disabled={this.props.disabled}
                className={styles.posBtn}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </button>
        )
    }
}