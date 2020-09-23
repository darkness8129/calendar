import React from 'react';
import './Calendar.scss';

const Calendar = () => {
    return (
        <div className='calendar'>
            <div className='calendar-container'>
                <div className='date-switcher'>
                    <div class='arrow-prev'>Back</div>
                    <span>September 2020</span>
                    <div class='arrow-next'>Forward</div>
                </div>
                <div className='calendar-dates'>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>21</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>11</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                    <div className='date-cell'>01</div>
                </div>

                <div className='calendar-days'>
                    <div className='day-of-week'>S</div>
                    <div className='day-of-week'>M</div>
                    <div className='day-of-week'>T</div>
                    <div className='day-of-week'>W</div>
                    <div className='day-of-week'>T</div>
                    <div className='day-of-week'>F</div>
                    <div className='day-of-week'>S</div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
