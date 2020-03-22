import {
    ADD_TIME,
    REMOVE_TIME
} from '../actions/actions';

const initialState = [];

function times(state = initialState, action) {

    switch (action.type) {
        case ADD_TIME:
            let previousHours = 0;
            let previousMinutes = 0;

            if (state.length > 0) {
                previousHours = state[state.length-1].total.hours;
                previousMinutes = state[state.length-1].total.minutes;
            }

            let minutes = ((previousHours+action.payload.hours)*60) + (previousMinutes+action.payload.minutes);
            let hours = Math.floor(minutes/60);
            minutes = minutes % 60;

            return [
                ...state,
                {
                    hours: action.payload.hours,
                    minutes: action.payload.minutes,
                    total: {
                        hours,
                        minutes
                    }
                }
            ];
        case REMOVE_TIME:
            if (state.length < 1 ||  typeof state[parseInt(action.payload.index)] === "undefined") {
                return state;
            }

            let newState = [...state];
            newState.splice(action.payload.index, 1);

            if (parseInt(action.payload.index) === state.length-1) {
                return newState;
            }

            let sumHours = 0;
            let sumMinutes = 0;
            newState = newState.map((item) => {
                let minutes = ((sumHours+item.hours)*60) + (sumMinutes+item.minutes);
                sumHours = Math.floor(minutes/60);
                sumMinutes = minutes % 60;

                return {
                    hours: item.hours,
                    minutes: item.minutes,
                    total: {
                        hours: sumHours,
                        minutes: sumMinutes
                    }
                };
            });

            return newState;
        default:
            return state;
    }
}

export default times;