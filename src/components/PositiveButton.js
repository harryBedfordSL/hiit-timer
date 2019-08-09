import React, { Component } from 'react';
import styles from './PositiveButton.module.css';
import { Icon } from 'semantic-ui-react';

export default class PositiveButton extends Component {    
    render() {
        const { disabled, onClick, icon } = this.props;
        return (
            <button
                disabled={disabled}
                className={styles.posBtn}
                onClick={onClick}
            >
                <Icon
                    className={styles.icon}
                    name={icon}
                    size='small'
                />
            </button>
        )
    }
}