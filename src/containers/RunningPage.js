import React, { Component } from 'react';
import NegativeButton from '../components/NegativeButton';
import { Link } from 'react-router-dom';
import styles from './RunningPage.module.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

class RunningPage extends Component {
    render() {
        return (
            <div className={styles.page}>
                <header>
                    Running Page
                </header>
                <div>
                    {this.props.test}
                </div>
                <Link to="/" className={styles.stopBtn}>
                    <NegativeButton text={"Stop"} />
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(RunningPage);
