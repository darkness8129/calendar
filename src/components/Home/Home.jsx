import React from 'react';
import CalendarContainer from './Calendar/CalendarContainer';
import ImgBlock from './ImgBlock/ImgBlock';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8 p-0'>
                        <ImgBlock />
                    </div>
                    <div className='col-lg-4 p-0'>
                        <CalendarContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
