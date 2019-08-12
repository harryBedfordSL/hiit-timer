import React, { Component } from 'react';
import PositiveButton from '../components/PositiveButton';
import { Link } from 'react-router-dom';
import TimeSettings from './TimeSettings';
import Exercises from './Exercises';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './ConfigPage.module.css';

import * as actions from '../actions/actions';

class ConfigPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goLink: styles.invalidLink
        }
        this.isValid = this.isValid.bind(this);
    }

    // Why is this method not being called?
    isValid() {
        const { exercises, workTime, restTime } = this.props
        if (exercises.length > 0) {
            console.log("validLink")   
            return true
        } else {
            console.log("invalid link")
            return false
        }
    }

    // componentDidUpdate() {
    //     console.log(this.state.goLink)
    //     // const test = this.isValid()
    //     //     ? styles.validLink
    //     //     : styles.invalidLink
    //     this.setState({goLink: styles.validLink})
    // }

    render() {
        return (
            <div className={styles.page}>
                <header className={styles.title}>
                    HIIT Timer
                </header>
                <div className={styles.content}>
                    <Exercises
                        exercises={this.props.exercises}
                        addExercise={this.props.addExercise}
                    />
                    <TimeSettings
                        workTime={this.props.workTime}
                        restTime={this.props.restTime}
                        updateTime={this.props.updateTime}
                    />
                    <Link to="/running" className={this.isValid ? styles.validLink : styles.invalidLink} >
                        <PositiveButton icon={'angle right'} />
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercises: state.exercises,
    workTime: state.workTime,
    restTime: state.restTime
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage)
