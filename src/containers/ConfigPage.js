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
        }
        this.openEditModal = this.openEditModal.bind(this)
        this.closeEditModal = this.closeEditModal.bind(this)
    }

    openEditModal = (exercise, index) => {
        this.setState({
            showEditModal: true,
            exerciseToEdit: exercise,
            numberInList: index
        })
    }

    closeEditModal = () => {
        this.setState({
            showEditModal: false,
        })
    }

    render = () => {
        const { isConfigValid, removeExercise, editExercise } = this.props;
        return (
            <div className={styles.normalPage}>
                {this.state.showEditModal && <div className={styles.backDrop} />}
                <EditModal
                    handleClose={this.closeEditModal}
                    show={this.state.showEditModal}
                    exerciseToEdit={this.state.exerciseToEdit}
                    numberInList={this.state.numberInList} 
                    deleteExercise={() => {
                        removeExercise(this.state.numberInList)
                        this.setState({showEditModal: false})
                    }}
                    save={(updatedExercise) => {
                        editExercise(this.state.exerciseToEdit, updatedExercise)
                        this.setState({showEditModal: false})
                    }}
                />
                <header className={styles.title}>
                    HIIT Timer
                </header>
                <div className={styles.content}>
                    <Exercises
                        exercises={this.props.exercises}
                        addExercise={this.props.addExercise}
                        openEditModal={this.openEditModal}
                        validateExerciseInput={this.props.validateExerciseInput}
                        isExerciseInputValid={this.props.isExerciseInputValid}
                    />
                    <TimeSettings
                        workTime={this.props.workTime}
                        restTime={this.props.restTime}
                        updateTime={this.props.updateTime}
                    />
                    <Link to="/running" className={isConfigValid ? styles.validLink : styles.invalidLink} >
                        <PositiveButton
                            icon={'angle right'}
                            size='big'
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
    isConfigValid: state.isConfigValid,
    isExerciseInputValid: state.isExerciseInputValid
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage)
