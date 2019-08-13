import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './NeutralButton.module.css';

export default class NeutralButton extends Component {
    render() {
        const { increment, direction, id, value, icon } = this.props;
        return (
            <button
                className={styles.neutralButton}
                onClick={() => increment(direction, id, value)}>
                <Icon 
                    name={icon}
                />
            </button>
        )
    }
}
