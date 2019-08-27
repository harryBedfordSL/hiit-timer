import actionTypes from '../../actions/types';

export const timings = {
    work: {
        title: 'Work',
        id: actionTypes.UPDATE_WORK_TIME,
        min: 1,
        max: 60,
        unit: 's'
    },
    rest: {
        title: 'Rest',
        id: actionTypes.UPDATE_REST_TIME,
        min: 1,
        max: 60,
        unit: 's'
    },
    sets: {
        title: 'Sets',
        id: actionTypes.UPDATE_SETS,
        min: 1,
        max: 10,
        unit: ''
    } 
}