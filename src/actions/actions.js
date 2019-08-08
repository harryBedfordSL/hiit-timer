import types from './types';

export const addExercise = exercise => ({
    type: types.ADD_EXERCISE,
    exercise
})

export const updateTime = (key, time) => ({
        type: key,
        time
})

