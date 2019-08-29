import React from 'react';
import styles from './NegativeButton.module.css';
import { Icon } from 'semantic-ui-react';
import { withRedux } from '../../utils/WithRedux';

export default withRedux(function NegativeButton({ onClick, icon, size, theme}) {    
    return (
        <button
            style={theme.negativeButton}
            className={styles.negBtn}
            onClick={onClick}
        >
            <Icon
                className={styles.icon}
                name={icon} 
                size={size}
            />
        </button>
    )
})