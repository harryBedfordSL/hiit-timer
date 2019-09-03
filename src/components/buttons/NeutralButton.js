import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './NeutralButton.module.css';

export default function NeutralButton({ handleClick, args, icon, size, disabled, theme }) {
    return (
        <button
            style={theme.neutralButton}
            disabled={disabled}
            className={disabled ? styles.disabledBtn : styles.neutralButton}
            onClick={() => {
                handleClick && handleClick(args)
            }}>
            <Icon
                className={styles.icon}
                name={icon}
                size={size}
            />
        </button>
    )
}
