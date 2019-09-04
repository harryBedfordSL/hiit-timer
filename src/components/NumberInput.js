import React, { Component } from 'react';
import styles from './NumberInput.module.css';
import NeutralButton from './buttons/NeutralButton';

export default class NumberInput extends Component {
    render = () => {
        const { inputTitle, increment, id, value, min, max, onChange, action, theme} = this.props;
        return (
            <div>
                <div>
                    {inputTitle}
                </div>
                <div className={styles.interactiveSection}>
                    <NeutralButton
                        disabled={value <= min} 
                        handleClick={increment}
                        args={{direction: 'minus', target: id, prevValue: value, action}}
                        icon='minus'
                        theme={theme}
                    />
                    <div>
                        <input
                            style={theme.input}
                            id={id}
                            className={styles.input}
                            type='number'
                            min={min}
                            max={max}
                            value={value}
                            onChange={(evt) => onChange(evt, action)}    
                        />
                        <span className={styles.unit}>{this.props.unit}</span>
                    </div>
                    <NeutralButton
                        disabled={value >= max}
                        handleClick={increment}
                        args={{direction: 'plus', target: id, prevValue: value, action}}
                        icon='plus'
                        theme={theme}
                    />
                </div>
            </div>
        )
    }
}