import React from 'react';
import styles from './PositiveButton.module.css';
import { Icon } from 'semantic-ui-react';

export default function PositiveButton({disabled, onClick, icon, size, theme}) {    
    return (
        <button
            style={theme.positiveButton}
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
