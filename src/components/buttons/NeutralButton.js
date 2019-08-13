import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './NeutralButton.module.css';

export default class NeutralButton extends Component {
    render() {
        const { handleClick, args, icon } = this.props;
        return (
            <button
                className={styles.neutralButton}
                onClick={() => handleClick(args)}>
                <Icon 
                    name={icon}
                />
            </button>
        )
    }
}