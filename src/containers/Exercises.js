import React, { Component } from 'react';
import styles from './Exercises.module.css';

export default class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: ["exercise1", "exercise2"]
        }
        this.addExercise = this.addExercise.bind(this)
    }

    addExercise(exercise) {
        this.setState({exercises: [...this.state.exercises, exercise]})
    }

    render () {
        return (
            <div>
                <form onSubmit={() => console.log("Submitted")}>
                    Add Exercise: <br/>
                    <input className={styles.input} type="text" />
                </form>
                <div>
                    <ul>
                        {console.log(this.state.exercises)}
                        {this.state && this.state.exercises.map(el => {
                            return (
                                <li key={el}>{el}</li>
                            )
                        })}
                    </ul>
                </div>
                <br/>
            </div>
        )
    }
}