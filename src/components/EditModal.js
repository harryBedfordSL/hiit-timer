import React, { Component } from 'react';
import styles from './EditModal.module.css';
import PositiveButton from './buttons/PositiveButton';
import NegativeButton from './buttons/NegativeButton';

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.enableEditMode = this.enableEditMode.bind(this)
    }

    enableEditMode = (exerciseToEdit) => {
        this.setState({
            editing: true,
            editedExercise: exerciseToEdit
        })
    }

    onChange = (event) => {
        this.setState({editedExercise: event.target.value})
    }
    
    render = () => {
        const { handleClose, show, exerciseToEdit, numberInList, deleteExercise, save} = this.props;
        return (
        <div className={show ? styles.showModal : styles.hideModal}>
            <div className={styles.toolBar}>
                <span className={styles.numberInList}>{numberInList}</span>
                <NegativeButton
                    onClick={() => {
                        handleClose()
                        this.setState({editing: false})
                    }}
                    icon='close'
                    size='mini'
                />
            </div>
            <div className={styles.modalBody}>
                {this.state.editing
                    ? <input
                        className={styles.editInput}
                        value={this.state.editedExercise}
                        onChange={this.onChange}
                    />
                    : <div className={styles.exerciseName}>
                        {exerciseToEdit}
                    </div>
                }
                <div className={styles.options}>
                    <NegativeButton
                        onClick={() => {
                            deleteExercise()
                            this.setState({editing: false})
                        }}
                        icon='trash'
                        size='mini'/>
                    {this.state.editing
                        ? <PositiveButton
                        onClick={() => {
                            save(this.state.editedExercise)
                            this.setState({editing: false})
                        }}
                        icon='save'
                        size='mini' />
                        : <PositiveButton
                            onClick={() => this.enableEditMode(exerciseToEdit)}
                            icon='edit'
                            size='mini' />
                    }
                </div>
            </div>
        </div>
    )}
}
