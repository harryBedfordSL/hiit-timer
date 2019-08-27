import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditModal from '../../components/modals/EditModal';
import Exercises from '../Exercises';
import styles from './ExerciseSettingsPage.module.css';
import NavigationBar from '../../components/NavigationBar';

import * as actions from '../../actions/actions';

class ExerciseSettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
        }
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
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

    render() {
        const { isConfigValid, removeExercise, editExercise } = this.props;
        return (
            <div className={styles.page}>
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
                <div className={styles.content}>
                    <div className={styles.title}>Exercises</div>
                    <Exercises
                        exercises={this.props.exercises}
                        addExercise={this.props.addExercise}
                        openEditModal={this.openEditModal}
                        validateExerciseInput={this.props.validateExerciseInput}
                        isExerciseInputValid={this.props.isExerciseInputValid}
                    />
                    <NavigationBar isSettingValid={isConfigValid} back={'/config'} next={'/numbers'} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    exercises: state.config.exercises,
    workTime: state.config.workTime,
    restTime: state.config.restTime,
    sets: state.config.sets,
    isConfigValid: state.isConfigValid,
    isExerciseInputValid: state.isExerciseInputValid
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseSettingsPage)