import React, { Component } from 'react';
import styles from './EditModal.module.css';
import PositiveButton from '../buttons/PositiveButton';
import NegativeButton from '../buttons/NegativeButton';

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.enableEditMode = this.enableEditMode.bind(this)
    }

    enableEditMode = (exerciseToEdit) => {
        const isInputValid = exerciseToEdit.length !== 0; 
        this.setState({
            editing: true,
            editedExercise: exerciseToEdit,
            disableSave: !isInputValid
        })
    }

    onChange = (event) => {
        const input = event.target.value;
        const isInputValid = input.length !== 0; 
        this.setState({editedExercise: input, disableSave: !isInputValid});
    }
    
    render = () => {
        const { handleClose, show, exerciseToEdit, numberInList, deleteExercise, save, theme} = this.props;
        return (
        <div className={show ? styles.showModal : styles.hideModal} style={theme.modal}>
            <div className={styles.toolBar}>
                <span className={styles.numberInList}>{numberInList}</span>
                <NegativeButton
                    onClick={() => {
                        handleClose()
                        this.setState({editing: false})
                    }}
                    icon='close'
                    size='small'
                    theme={theme}
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
                        size='big'
                        theme={theme}    
                    />
                    {this.state.editing
                        ? <PositiveButton
                            onClick={() => {
                                save(this.state.editedExercise)
                                this.setState({editing: false})
                            }}
                            icon='save'
                            size='big'
                            disabled={this.state.disableSave} 
                            theme={theme}
                        />
                        : <PositiveButton
                            onClick={() => this.enableEditMode(exerciseToEdit)}
                            icon='edit'
                            size='big' 
                            theme={theme}    
                        />
                    }
                </div>
            </div>
        </div>
    )}
}
