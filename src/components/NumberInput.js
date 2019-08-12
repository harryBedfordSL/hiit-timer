import React, { Component } from 'react';
import styles from './NumberInput.module.css';
import { Icon } from 'semantic-ui-react';

export default class NumberInput extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.inputTitle}
                </div>
                <div className={styles.interactiveSection}>
                    <button
                        className={styles.incrementButton}
                        onClick={() => this.props.increment('minus', this.props.id, this.props.value)}>
                        <Icon 
                            className={styles.icon}
                            name='minus'
                        />
                    </button>
                    <input
                        id={this.props.id}
                        className={styles.input}
                        type='number'
                        min={this.props.min}
                        max={this.props.max}
                        value={this.props.value}
                        onChange={this.props.onChange}    
                    />
                    <button
                        className={styles.incrementButton}
                        onClick={() => this.props.increment('plus', this.props.id, this.props.value)}>
                        <Icon 
                            className={styles.icon}
                            name='plus'
                        />
                    </button>
                </div>
            </div>
        )
    }
}