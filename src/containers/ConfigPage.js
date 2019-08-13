import React, { Component } from 'react';
import PositiveButton from '../components/buttons/PositiveButton';
import { Link } from 'react-router-dom';
import TimeSettings from './TimeSettings';
import Exercises from './Exercises';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './ConfigPage.module.css';

import * as actions from '../actions/actions';

class ConfigPage extends Component {
    render() {
        const { isConfigValid } = this.props;
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
                    <Link to="/running" className={isConfigValid ? styles.validLink : styles.invalidLink} >
                        <PositiveButton icon={'angle right'} />
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    exercises: state.config.exercises,
    workTime: state.config.workTime,
    restTime: state.config.restTime,
    isConfigValid: state.isConfigValid
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage)
