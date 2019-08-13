import React, { Component } from 'react';
import styles from './NegativeButton.module.css';
import { Icon } from 'semantic-ui-react';

export default class NegativeButton extends Component {    
    render = () => {
        const { onClick, icon } = this.props;
        return (
            <button
                className={styles.negBtn}
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