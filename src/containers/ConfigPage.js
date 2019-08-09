import React, { Component } from 'react';
import PositiveButton from '../components/PositiveButton';
import { Link } from 'react-router-dom';
import styles from './ConfigPage.module.css'
import TimeSettings from './TimeSettings';
import Exercises from './Exercises';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class ConfigPage extends Component {
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
                    <Link to="/running" >
                        <PositiveButton text={"🡆"} disabled={false} />
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
