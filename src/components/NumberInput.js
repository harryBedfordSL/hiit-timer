import React, { Component } from 'react';
import styles from './NumberInput.module.css';
import NeutralButton from './buttons/NeutralButton';

export default class NumberInput extends Component {
    render = () => {
        const { inputTitle, increment, id, value, min, max, onChange, action} = this.props;
        return (
            <div>
                <div>
                    {inputTitle}
                </div>
                <div className={styles.interactiveSection}>
                    <NeutralButton 
                        handleClick={increment}
                        args={{direction: 'minus', target: id, prevValue: value, action}}
                        icon='minus'
                    />
                    <input
                        id={id}
                        className={styles.input}
                        type='number'
                        min={min}
                        max={max}
                        value={value}
                        onChange={(evt) => onChange(evt, action)}    
                    />
                    <NeutralButton 
                        handleClick={increment}
                        args={{direction: 'plus', target: id, prevValue: value, action}}
                        icon='plus'
                    />
                </div>
            </div>
        )
    }
}