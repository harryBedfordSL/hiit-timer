import types from '../actions/types';

const INITIAL_STATE = {
    exercises: [],
    workTime: "30",
    restTime: "30"
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADD_EXERCISE:
            return {
                ...state,
                exercises: [...state.exercises, action.exercise]
            };

        case types.UPDATE_WORK_TIME:
            return {
                ...state,
                workTime: action.time
            };

        case types.UPDATE_REST_TIME:
            return {
                ...state,
                restTime: action.time
            };

        default:
             return state;
    }
}