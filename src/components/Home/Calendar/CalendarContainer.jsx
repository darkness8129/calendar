import { connect } from 'react-redux';
import {
    selectDateActionCreator,
    switchMonthCreator,
    setDaysOfMonthActionCreator,
} from '../../../redux/actionCreators';
import Calendar from './Calendar';

const mapStateToProps = (state) => ({
    calendar: state.calendarReducer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectDate: (date) => dispatch(selectDateActionCreator(date)),
        switchMonth: (switchedDate) =>
            dispatch(switchMonthCreator(switchedDate)),
        setDaysOfMonth: (daysOfMonth) =>
            dispatch(setDaysOfMonthActionCreator(daysOfMonth)),
    };
};

const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default CalendarContainer;
