import types from '../actions/types';

const INITIAL_STATE = {
    config: {
        exercises: [],
        workTime: 30,
        restTime: 30
    },
    isConfigValid: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADD_EXERCISE:
            return {
                ...state,
                config: {
                    ...state.config,
                    exercises: [...state.config.exercises, action.exercise]
                }
            };

        case types.UPDATE_WORK_TIME:
            return {
                ...state,
                config: {
                    ...state.config,
                    workTime: action.time
                }
            };

        case types.UPDATE_REST_TIME:
            return {
                ...state,
                config: {
                    ...state.config,
                    restTime: action.time
                }
            };

        case types.IS_CONFIG_VALID:
            return {
                ...state,
                isConfigValid: action.isValid
            }

        default:
             return state;
    }
}