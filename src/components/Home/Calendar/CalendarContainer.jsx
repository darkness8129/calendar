import React from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar';

const mapStateToProps = (state) => ({
    calendar: state.calendarReducer,
});

let mapDispatchToProps = () => {
    return {};
};

const CalendarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default CalendarContainer;
