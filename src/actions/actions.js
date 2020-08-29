/*
 * action types
 */

export const ADD_TIME = 'ADD_TIME';
export const REMOVE_TIME = 'REMOVE_TIME';
export const CLEAR_TIMES = 'CLEAR_TIMES';

/*
 * action creators
 */

export function addTime(hours, minutes) {
    return {
        type: ADD_TIME,
        payload: {
            hours,
            minutes
        }
    };
}

export function removeTime(index) {
    return {
        type: REMOVE_TIME,
        payload: {
            index
        }
    };
}

export function clearTimes() {
    return {
        type: CLEAR_TIMES
    };
}
