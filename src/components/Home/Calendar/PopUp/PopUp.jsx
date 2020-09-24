import React from 'react';
import './PopUp.scss';

const PopUp = ({ month, dayName, dayNum }) => {
    return (
        <div className='modal' id='date-modal'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'
                    >
                        <span aria-hidden='true'>&times;</span>
                    </button>
                    <div className='modal-body'>
                        <div>
                            <label htmlFor='month'>
                                Month:
                                <input
                                    id='month'
                                    readOnly
                                    value={month}
                                ></input>
                            </label>
                        </div>
                        <div>
                            <label htmlFor='day'>
                                Day:
                                <input
                                    id='day'
                                    readOnly
                                    value={`${dayNum},  ${dayName}`}
                                ></input>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
