import React from 'react';
import Calendar from './Calendar/Calendar';
import ImgBlock from './ImgBlock/ImgBlock';

const Home = () => {
    return (
        <div className='home'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8 p-0'>
                        <ImgBlock />
                    </div>
                    <div className='col-4 p-0'>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
