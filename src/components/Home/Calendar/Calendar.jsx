import React from 'react';
import './Calendar.scss';

const daysOfWeekArr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const Calendar = ({ calendar }) => {
    const days = calendar.currentMonth.map((week, index) => {
        return (
            <div className='week' key={index}>
                {week.map((day, index) => {
                    return day ? (
                        <div className='day' key={index}>
                            {day}
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

    return (
        <div className='calendar'>
            <div className='calendar-container'>
                <div className='date-switcher'>
                    <div className='arrow-prev'>Back</div>
                    <span>September 2020</span>
                    <div className='arrow-next'>Forward</div>
                </div>
                <div className='calendar-dates'>{days}</div>
                <div className='calendar-days'>{daysOfWeek}</div>
            </div>
        </div>
    );
};

export default Calendar;
