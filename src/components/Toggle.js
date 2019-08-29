import React, { Component } from 'react';
import styles from './Toggle.module.css';
import { Icon } from 'semantic-ui-react';

export default class Toggle extends Component {
    render() {
        const { isLightMode, handleChange, args, leftIcon, rightIcon } = this.props;
        return (
            <div>
                <input
                    checked={isLightMode}
                    onChange={() => handleChange(args)}
                    className={styles.checkbox}
                    id={`react-switch-new`}
                    type='checkbox'
                />
                <label
                    className={styles.label}
                    htmlFor={`react-switch-new`}
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
