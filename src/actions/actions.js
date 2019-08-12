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

export const addExercise = exercise => (dispatch, getState) => {
    const filteredConfig = filterState(getState().config, 'exercises')
    dispatch(validateConfig(filteredConfig, exercise))
    dispatch(addingExercise(exercise))
}
    

export const updateTime = (actionType, time) => (dispatch, getState) => {
    const key = actionType === types.UPDATE_WORK_TIME
        ? 'workTime'
        : 'restTime'
    const filteredConfig = filterState(getState().config, key)
    dispatch(validateConfig(filteredConfig, time))
    dispatch(updatingTime(actionType, time))
}

const validateConfig = (filteredConfig, input) => {
    let isValid = Object.keys(filteredConfig)
        .reduce((acc, currKey) => {
            if (filteredConfig[currKey].length === 0) acc = false
            return acc
        }, true);

    if (input.length === 0) isValid = false;

    return updatingValidConfig(isValid) 
}

const filterState = (config, keyToRemove) => {
    return Object.keys(config)
        .filter(elem => elem !== keyToRemove)
        .reduce((acc, curr) => ({...acc, [curr]: config[curr]}), {})
}

