import types from '../actions/types';
import { INITIAL_STATE } from '../utils/InitialState';

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

        case types.UPDATE_EXERCISES:
            return {
                ...state,
                config: {
                    ...state.config,
                    exercises: action.exercises
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

        case types.UPDATE_SETS:
            return {
                ...state,
                config: {
                    ...state.config,
                    sets: action.sets
                }
            };

        case types.UPDATE_THEME:
            return {
                ...state,
                theme: action.theme
            }


        case types.UPDATE_SOUND_MODE: 
            return {
                ...state,
                soundOn: action.soundOn
            }

        case types.IS_CONFIG_VALID:
            return {
                ...state,
                isConfigValid: action.isValid
            };
        
        case types.IS_EXERCISE_INPUT_VALID:
            return {
                ...state,
                isExerciseInputValid: action.isValid
            };

        default:
             return state;
    }
}