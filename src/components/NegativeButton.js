import React, { Component } from 'react';
import styles from './NegativeButton.module.css';
import { Icon } from 'semantic-ui-react';

export default class NegativeButton extends Component {    
    render() {
        return (
            <button
                className={styles.negBtn}
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