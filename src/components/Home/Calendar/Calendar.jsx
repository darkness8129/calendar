import React from 'react';
import './Calendar.scss';
import {
    getDaysOfMonth,
    areDatesEqual,
    getYear,
    getMonth,
    getNameOfMonthInLetters,
    getNameOfDayInLetters,
    getDayNum,
} from './calendarFunctions';
import classNames from 'classnames';
import PopUp from './PopUp/PopUp';

const daysOfWeekArr = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const Calendar = ({ calendar, selectDate, switchMonth, setDaysOfMonth }) => {
    const days = calendar.currentMonth.map((week, index) => {
        return (
            <div className='week' key={index}>
                {week.map((day, index) => {
                    return day ? (
                        <a
                            key={index}
                            data-toggle='modal'
                            data-target='#date-modal'
                        >
                            <div
                                className={classNames('day', {
                                    day_active: areDatesEqual(
                                        day,
                                        calendar.currentDateToday
                                    ),
                                })}
                                onClick={() => onSelectDate(day)}
                            >
                                {day.getDate() < 10
                                    ? '0' + day.getDate()
                                    : day.getDate()}
                            </div>
                        </a>
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
        const year = getYear(calendar.currentDate);
        const month = getMonth(calendar.currentDate);
        const date = new Date(year, month + 1);

        switchMonth(date);
        setDaysOfMonth(getDaysOfMonth(year, month + 1));
    };

    const showPrevMonth = () => {
        const year = getYear(calendar.currentDate);
        const month = getMonth(calendar.currentDate);
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
                    <span className='switcher-text'>{`${getNameOfMonthInLetters(
                        calendar.currentDate
                    )} ${getYear(calendar.currentDate)}`}</span>
                    <div className='arrow-next' onClick={showNextMonth}>
                        Forward
                    </div>
                </div>
                <div className='calendar-dates'>{days}</div>
                <div className='calendar-days'>{daysOfWeek}</div>
            </div>

            <PopUp
                month={getNameOfMonthInLetters(calendar.selectedDate)}
                dayName={getNameOfDayInLetters(calendar.selectedDate)}
                dayNum={getDayNum(calendar.selectedDate)}
            />
        </div>
    );
};

export default Calendar;
