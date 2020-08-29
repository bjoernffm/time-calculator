import reducer from '../reducers/times';
import * as actions from '../actions/actions';

describe('times reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('should handle ADD_TIME', () => {
        expect(
            reducer([], {
                type: actions.ADD_TIME,
                payload: {
                    hours: 2,
                    minutes: 3
                }
            })
        ).toEqual([
            {
                hours: 2,
                minutes: 3,
                total: {
                    hours: 2,
                    minutes: 3
                }
            }
        ]);

        expect(
            reducer([
                    {
                        hours: 1,
                        minutes: 40,
                        total: {
                            hours: 1,
                            minutes: 40
                        }
                    }
                ], {
                type: actions.ADD_TIME,
                payload: {
                    hours: 1,
                    minutes: 32
                }
            })
        ).toEqual([
            {
                hours: 1,
                minutes: 40,
                total: {
                    hours: 1,
                    minutes: 40
                }
            },
            {
                hours: 1,
                minutes: 32,
                total: {
                    hours: 3,
                    minutes: 12
                }
            }
        ]);
    });

    it('should handle REMOVE_TIME when empty or with wrong index', () => {
        expect(
            reducer([], {
                type: actions.REMOVE_TIME,
                payload: {
                    index: 2
                }
            })
        ).toEqual([]);

        expect(
            reducer(
                [
                    {
                        hours: 1,
                        minutes: 32,
                        total: {
                            hours: 1,
                            minutes: 32
                        }
                    }
                ], {
                type: actions.REMOVE_TIME,
                payload: {
                    index: 2
                }
            })
        ).toEqual(
            [
                {
                    hours: 1,
                    minutes: 32,
                    total: {
                        hours: 1,
                        minutes: 32
                    }
                }
            ]
        );
    });

    it('should handle REMOVE_TIME when everything is alright', () => {
        expect(
            reducer(
                [
                    {
                        hours: 1,
                        minutes: 32,
                        total: {
                            hours: 1,
                            minutes: 32
                        }
                    },
                    {
                        hours: 1,
                        minutes: 10,
                        total: {
                            hours: 2,
                            minutes: 42
                        }
                    }
                ], {
                type: actions.REMOVE_TIME,
                payload: {
                    index: 1
                }
            })
        ).toEqual(
            [
                {
                    hours: 1,
                    minutes: 32,
                    total: {
                        hours: 1,
                        minutes: 32
                    }
                }
            ]
        );

        expect(
            reducer(
                [
                    {
                        hours: 1,
                        minutes: 32,
                        total: {
                            hours: 1,
                            minutes: 32
                        }
                    },
                    {
                        hours: 1,
                        minutes: 10,
                        total: {
                            hours: 2,
                            minutes: 42
                        }
                    }
                ], {
                type: actions.REMOVE_TIME,
                payload: {
                    index: 0
                }
            })
        ).toEqual(
            [
                {
                    hours: 1,
                    minutes: 10,
                    total: {
                        hours: 1,
                        minutes: 10
                    }
                }
            ]
        );
    });

    it('should handle CLEAR_TIMES when everything is alright', () => {
        expect(
            reducer(
                [
                    {
                        hours: 1,
                        minutes: 32,
                        total: {
                            hours: 1,
                            minutes: 32
                        }
                    },
                    {
                        hours: 1,
                        minutes: 10,
                        total: {
                            hours: 2,
                            minutes: 42
                        }
                    }
                ], {
                type: actions.CLEAR_TIMES
            })
        ).toEqual(
            []
        );
    });
});