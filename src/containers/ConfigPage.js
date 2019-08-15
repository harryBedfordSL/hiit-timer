import React, { Component } from 'react';
import PositiveButton from '../components/buttons/PositiveButton';
import { Link } from 'react-router-dom';
import TimeSettings from './TimeSettings';
import Exercises from './Exercises';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditModal from '../components/EditModal';
import NeutralButton from '../components/buttons/NeutralButton';
import styles from './ConfigPage.module.css';
import NumberInput from '../components/NumberInput';
import actionTypes from '../actions/types';

import * as actions from '../actions/actions';

class ConfigPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
        }
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.increment = this.increment.bind(this);
        this.updateTarget = this.updateTarget.bind(this);
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
                <div className={styles.content}>
                    <Exercises
                        exercises={this.props.exercises}
                        addExercise={this.props.addExercise}
                        openEditModal={this.openEditModal}
                        validateExerciseInput={this.props.validateExerciseInput}
                        isExerciseInputValid={this.props.isExerciseInputValid}
                    />
                    <div>
                        <TimeSettings
                            workTime={this.props.workTime}
                            restTime={this.props.restTime}
                            increment={this.increment}
                            onChange={this.updateTarget}
                            action={this.props.updateTime}
                        />
                        <NumberInput 
                            inputTitle='Sets:'
                            increment={this.increment}
                            id={actionTypes.UPDATE_SETS}
                            value={this.props.sets}
                            min={1}
                            max={10}
                            onChange={this.updateTarget}
                            action={this.props.updateSets}
                        />
                    </div>
                    <div className={styles.navigation}>
                        <Link to="/welcome">
                            <NeutralButton
                                icon={'angle left'}
                                size='big'
                                handleClick={()=>{}}
                            />
                        </Link>
                        <Link to="/running" className={isConfigValid ? styles.validLink : styles.invalidLink} >
                            <PositiveButton
                                icon={'angle right'}
                                size='big'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPage)
