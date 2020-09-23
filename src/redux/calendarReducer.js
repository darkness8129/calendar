import * as ActionTypes from './actionTypes';

const initialState = {
    currentMonth: [
        [undefined, undefined, undefined, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, undefined, undefined],
    ],
    currentDate: 1
}


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.showNextMonth:
            return { ...state };
        case ActionTypes.showPrevMonth:
            return { ...state };
        case ActionTypes.selectDate:
            return { ...state };
        default:
            return state;

    }
}

export const showNextMonthActionCreator = () => ({ type: ActionTypes.showNextMonth });
export const showPrevMonthActionCreator = () => ({ type: ActionTypes.showPrevMonth });
export const selectDateActionCreator = () => ({ type: ActionTypes.selectDate });