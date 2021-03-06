import React, { Component } from 'react';
import styles from './Exercises.module.css';
import PositiveButton from '../components/buttons/PositiveButton';

export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange = (event) => {
        this.setState({inputText: event.target.value})
        this.props.validateExerciseInput(event.target.value);
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.addExercise(this.state.inputText)
        this.setState({inputText: ""})
    }

    render = () => {
        const { theme } = this.props;
        return (
            <div className={styles.exercises}>
                <form onSubmit={event => this.submitForm(event)}>
                    <div className={styles.interactionBar}>
                        <input
                            style={theme.input} 
                            className={styles.input} 
                            type="text" 
                            value={this.state.inputText}
                            onChange={this.onChange}
                        />
                        <PositiveButton 
                            icon='plus' 
                            disabled={!this.props.isExerciseInputValid} 
                            theme={theme}    
                        />
                    </div>
                </form>
                <div className={styles.exerciseContainer}>
                    {this.props && this.props.exercises.map((el, index) => {
                        return (
                            <span
                                key={index}
                                className={styles.exercise}
                                onClick={() => this.props.openEditModal(el, index+1)}
                            >
                                {index+1} - {el}
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    }
}
