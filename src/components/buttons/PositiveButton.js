import React, { Component } from 'react';
import styles from './PositiveButton.module.css';
import { Icon } from 'semantic-ui-react';

export default class PositiveButton extends Component {    
    render = () => {
        const { disabled, onClick, icon, size } = this.props;
        return (
            <button
                disabled={disabled}
                className={disabled ? styles.disabledBtn : styles.posBtn}
                onClick={onClick}
            >
                <Icon
                    className={styles.icon}
                    name={icon}
                    size={size}
                />
            </button>
        )
    }
}