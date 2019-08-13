import React, { Component } from 'react';
import actionType from '../actions/types';
import NumberInput from '../components/NumberInput';

export default class TimeSettings extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.increment = this.increment.bind(this);
    }

    handleChange = (event) => {
        const key = event.target.id;
        const value = event.target.value;
        this.props.updateTime(key, value);
    }

    increment = (args) => {
        const { direction, target, prevValue } = args;
        if (direction === 'minus') {
            this.props.updateTime(target, prevValue-1)
        } else if (direction === 'plus') {
            this.props.updateTime(target, prevValue+1)
        }
    }

    render = () => {
        return (
            <div>
                <NumberInput
                    inputTitle='Work time:' 
                    id={actionType.UPDATE_WORK_TIME}
                    min="0"
                    max="60"
                    value={this.props.workTime}
                    onChange={this.handleChange}
                    increment={this.increment}
                />
                <NumberInput
                    inputTitle='Rest time:' 
                    id={actionType.UPDATE_REST_TIME}
                    min="0"
                    max="60"
                    value={this.props.restTime}
                    onChange={this.handleChange}
                    increment={this.increment} 
                />
            </div>
        )
    }
}