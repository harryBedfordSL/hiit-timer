import React, { Component } from 'react';
import actionType from '../actions/types';
import NumberInput from '../components/NumberInput';

export default class TimeSettings extends Component {
    render = () => {
        return (
            <div>
                <NumberInput
                    inputTitle='Work time:' 
                    id={actionType.UPDATE_WORK_TIME}
                    min={1}
                    max={60}
                    value={this.props.workTime}
                    onChange={this.props.onChange}
                    increment={this.props.increment}
                    action={this.props.action}
                />
                <NumberInput
                    inputTitle='Rest time:' 
                    id={actionType.UPDATE_REST_TIME}
                    min={1}
                    max={60}
                    value={this.props.restTime}
                    onChange={this.props.onChange}
                    increment={this.props.increment}
                    action={this.props.action} 
                />
            </div>
        )
    }
}