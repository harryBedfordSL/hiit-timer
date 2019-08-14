import types from './types';

const addingExercise = exercise => ({
    type: types.ADD_EXERCISE,
    exercise
})

const updatingTime = (key, time) => ({
    type: key,
    time
})

const updatingValidConfig = isValid => ({
    type: types.IS_CONFIG_VALID,
    isValid
})

const updatingExercises = exercises => ({
    type: types.UPDATE_EXERCISES,
    exercises
})

export const addExercise = exercise => (dispatch, getState) => {
    const filteredConfig = filterState(getState().config, 'exercises')
    const isConfigValid = validateConfig(filteredConfig);
    const isInputValid = validateInput(exercise);
    dispatch(updatingValidConfig(isConfigValid && isInputValid))
    dispatch(addingExercise(exercise))
}

export const editExercise = (prevExercise, newExercise) => (dispatch, getState) => {
    let exercises = getState().config.exercises;
    const indexOfEditedExercise = exercises.indexOf(prevExercise);
    exercises[indexOfEditedExercise] = newExercise;
    dispatch(updatingExercises(exercises))
}
    
export const removeExercise = numberInList => (dispatch, getState) => {
    const indexInExercises = numberInList - 1;
    const newExercises = getState().config.exercises.filter((_, i) => indexInExercises !== i);
    const isInputValid = validateInput(newExercises);
    dispatch(updatingValidConfig(isInputValid))
    dispatch(updatingExercises(newExercises))
}

export const updateTime = (actionType, time) => (dispatch, getState) => {
    const key = actionType === types.UPDATE_WORK_TIME
        ? 'workTime'
        : 'restTime'
    const filteredConfig = filterState(getState().config, key)
    const isVonfigValid = validateConfig(filteredConfig);
    const isInputValid = validateInput(time);
    dispatch(updatingValidConfig(isVonfigValid && isInputValid))
    dispatch(updatingTime(actionType, time))
}

const validateConfig = filteredConfig => {
    return Object.keys(filteredConfig)
        .reduce((acc, currKey) => {
            if (filteredConfig[currKey].length === 0) acc = false
            return acc
        }, true);
}

const validateInput = input => {
    return input.length !== 0;
}

const filterState = (config, keyToRemove) => {
    return Object.keys(config)
        .filter(elem => elem !== keyToRemove)
        .reduce((acc, curr) => ({...acc, [curr]: config[curr]}), {})
}

