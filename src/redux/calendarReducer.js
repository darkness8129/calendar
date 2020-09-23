import * as ActionTypes from './actionTypes';
import { getDaysOfMonth } from './../components/Home/Calendar/calendarFunctions';

const currentDate = new Date();
const currentMonthDays = getDaysOfMonth(currentDate.getFullYear(), currentDate.getMonth());

const initialState = {
    currentMonth: currentMonthDays,
    currentDate: new Date(),
    selectedDate: null
}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.switchMonth:
            return { ...state, currentDate: action.switchedDate };
        case ActionTypes.selectDate:
            return { ...state, selectedDate: action.date };
        case ActionTypes.setDaysOfMonth:
            return { ...state, currentMonth: action.daysOfMonth };
        default:
            return state;

    }
}


