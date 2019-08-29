import React, { Component } from 'react';
import NumberInput from '../../components/NumberInput';
import NavigationBar from '../../components/NavigationBar';
import { timings } from './Timings';
import { withRedux } from '../../utils/WithRedux';
import styles from './NumberSettingsPage.module.css';


class NumberSettingsPage extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.updateTarget = this.updateTarget.bind(this);
        this.getValue = this.getValue.bind(this);
        this.getAction = this.getAction.bind(this);
    }

    increment = args => {
        const { direction, target, prevValue, action } = args;
        if (direction === 'minus') {
            action(target, prevValue - 1);
        } else if (direction === 'plus') {
            action(target, prevValue + 1);
        }
    }

    updateTarget = (event, action) => {
        const target = event.target.id;
        const value = parseInt(event.target.value);
        action(target, value);
    }

    // TODO: refactor following two methods
    getValue = (currObj) => {
        if (currObj.title === 'Work') return this.props.workTime
        if (currObj.title === 'Rest') return this.props.restTime
        if (currObj.title === 'Sets') return this.props.sets
    }

    getAction = (currObj) => {
        if (currObj.title === 'Work') return this.props.updateTime
        if (currObj.title === 'Rest') return this.props.updateTime
        if (currObj.title === 'Sets') return this.props.updateSets
    }

    render() {
        return (
            <div className={styles.page}>
                <div className={styles.title}>Timings</div>
                <div className={styles.content}>
                    {Object.keys(timings).map(elem => {
                        const currObj = timings[elem]
                        const value = this.getValue(currObj);
                        const action = this.getAction(currObj);
                        return (
                            <NumberInput
                                key={currObj.id}
                                inputTitle={currObj.title} 
                                increment={this.increment}
                                id={currObj.id}
                                min={currObj.min}
                                max={currObj.max}
                                onChange={this.updateTarget}
                                unit={currObj.unit}
                                value={value}
                                action={action}
                            />
                        )
                    })}
                </div>
                <NavigationBar isSettingValid={this.props.isConfigValid} back={'/exercises'} next={'/running'} />
            </div>
        )
    }
}

export default withRedux(NumberSettingsPage);
