import * as ActionTypes from './actionTypes';

const initialState = {
    currentMonth: [
        [undefined, undefined, undefined, new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(), new Date(), undefined, undefined],
    ],
    currentDate: new Date(),
    selectedDate: null
}


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.switchMonth:
            let switchedDate = action.switchedDate;
            return { ...state, currentDate: switchedDate };
        case ActionTypes.selectDate:
            let date = action.date;
            return { ...state, selectedDate: date };
        default:
            return state;

    }
}
