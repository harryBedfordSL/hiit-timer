import React, { Component } from 'react';
import styles from './NumberInput.module.css';
import NeutralButton from './buttons/NeutralButton';

export default class NumberInput extends Component {
    render() {
        const { inputTitle, increment, id, value, min, max, onChange} = this.props;
        return (
            <div>
                <div>
                    {inputTitle}
                </div>
                <div className={styles.interactiveSection}>
                    <NeutralButton 
                        increment={increment}
                        direction='minus'
                        id={id}
                        value={value}
                        icon='minus'
                    />
                    <input
                        id={id}
                        className={styles.input}
                        type='number'
                        min={min}
                        max={max}
                        value={value}
                        onChange={onChange}    
                    />
                    <NeutralButton 
                        increment={increment}
                        direction='plus'
                        id={id}
                        value={value}
                        icon='plus'
                    />
                </div>
            </div>
        )
    }
}