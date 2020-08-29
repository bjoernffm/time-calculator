import * as actions from '../actions/actions';

describe('actions', () => {
    it('should create an action to add a time', () => {
        const hours = 1;
        const minutes = 2;
        const expectedAction = {
            type: actions.ADD_TIME,
            payload: {
                hours,
                minutes
            }
        };

        expect(actions.addTime(hours, minutes)).toEqual(expectedAction)
    });

    it('should create an action to remove a time', () => {
        const index = 1;
        const expectedAction = {
            type: actions.REMOVE_TIME,
            payload: {
                index
            }
        };

        expect(actions.removeTime(index)).toEqual(expectedAction)
    });

    it('should create an action to clear all times', () => {
        const expectedAction = {
            type: actions.CLEAR_TIMES
        };

        expect(actions.clearTimes()).toEqual(expectedAction)
    });
});