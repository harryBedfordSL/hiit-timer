import React, { Component } from 'react';
import styles from './Toggle.module.css';
import { Icon } from 'semantic-ui-react';

export default class Toggle extends Component {
    render() {
        const { checked, handleChange, args, leftIcon, rightIcon, id } = this.props;
        return (
            <div className={styles.toggle}>
                <input
                    checked={checked}
                    onChange={() => {
                        handleChange && handleChange(args)
                    }}
                    className={styles.checkbox}
                    id={id}
                    type='checkbox'
                />
                <label
                    className={styles.label}
                    htmlFor={id}
                >
                    <div className={styles.themeIcon}>
                        <Icon 
                            name={leftIcon}
                            size='small'
                        />
                    </div>
                    <span className={styles.button} />
                    <div className={styles.themeIcon}>
                        <Icon 
                            name={rightIcon}
                            size='small' 
                        />
                    </div>
                </label>
            </div>
        )
    }
}
