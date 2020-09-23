import React from 'react';
import './Calendar.scss';
import { getDaysOfMonth } from './calendarFunctions';

const daysOfWeekArr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const Calendar = ({ calendar, selectDate, switchMonth, setDaysOfMonth }) => {
    debugger;
    const days = calendar.currentMonth.map((week, index) => {
        return (
            <div className='week' key={index}>
                {week.map((day, index) => {
                    return day ? (
                        <div
                            className='day'
                            key={index}
                            onClick={() => onSelectDate(day)}
                        >
                            {day.getDate()}
                        </div>
                    ) : (
                        <div key={index}></div>
                    );
                })}
            </div>
        );
    });

    const daysOfWeek = daysOfWeekArr.map((day, index) => {
        return (
            <div className='day-of-week' key={index}>
                {day}
            </div>
        );
    });

    const showNextMonth = () => {
        const year = calendar.currentDate.getFullYear();
        const month = calendar.currentDate.getMonth();
        const date = new Date(year, month + 1);

        switchMonth(date);
        setDaysOfMonth(getDaysOfMonth(year, month + 1));
    };

    const showPrevMonth = () => {
        const year = calendar.currentDate.getFullYear();
        const month = calendar.currentDate.getMonth();
        const date = new Date(year, month - 1);

        switchMonth(date);
        setDaysOfMonth(getDaysOfMonth(year, month - 1));
    };

    const onSelectDate = (date) => {
        selectDate(date);
    };

    return (
        <div className='calendar'>
            <div className='calendar-container'>
                <div className='date-switcher'>
                    <div className='arrow-prev' onClick={showPrevMonth}>
                        Back
                    </div>
                    <span>{calendar.currentDate.getMonth()}</span>
                    <div className='arrow-next' onClick={showNextMonth}>
                        Forward
                    </div>
                </div>
                <div className='calendar-dates'>{days}</div>
                <div className='calendar-days'>{daysOfWeek}</div>
            </div>
        </div>
    );
};

export default Calendar;
