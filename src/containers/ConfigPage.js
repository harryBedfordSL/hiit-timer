import React, { Component } from 'react';
import PositiveButton from '../components/buttons/PositiveButton';
import { Link } from 'react-router-dom';
import TimeSettings from './TimeSettings';
import Exercises from './Exercises';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './ConfigPage.module.css';

import * as actions from '../actions/actions';
import EditModal from '../components/EditModal';

class ConfigPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            exerciseToEdit: null
        }
        this.openEditModal = this.openEditModal.bind(this)
        this.closeEditModal = this.closeEditModal.bind(this)
    }

    openEditModal = (exercise) => {
        this.setState({
            showEditModal: true,
            exerciseToEdit: exercise
        })
    }

    closeEditModal = () => {
        this.setState({
            showEditModal: false,
            exerciseToEdit: null
        })
    }

    render = () => {
        const { isConfigValid } = this.props;
        return (
            <div className={styles.normalPage}>
                {this.state.showEditModal && <div className={styles.backDrop} onClick={this.closeEditModal} />}
                <EditModal handleClose={this.closeEditModal} show={this.state.showEditModal} children={this.state.exerciseToEdit} />
                <header className={styles.title}>
                    HIIT Timer
                </header>
                <div className={styles.content}>
                    <Exercises
                        exercises={this.props.exercises}
                        addExercise={this.props.addExercise}
                        openEditModal={this.openEditModal}
                    />
                    <TimeSettings
                        workTime={this.props.workTime}
                        restTime={this.props.restTime}
                        updateTime={this.props.updateTime}
                    />
                    <Link to="/running" className={isConfigValid ? styles.validLink : styles.invalidLink} >
                        <PositiveButton
                            icon={'angle right'}
                            size='small'
                        />
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
