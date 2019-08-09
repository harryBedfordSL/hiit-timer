import React, { Component } from 'react';
import styles from './PositiveButton.module.css';
import { Icon } from 'semantic-ui-react';

export default class PositiveButton extends Component {    
    render() {
        return (
            <button
                disabled={this.props.disabled}
                className={styles.posBtn}
                onClick={this.props.onClick}
            >
                <Icon
                    className={styles.icon}
                    name={this.props.icon}
                    size='small'
                />
            </button>
        )
    }
}