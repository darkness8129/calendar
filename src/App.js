import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import './scss/Base.scss';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Route exact path='/' render={() => <Home />} />
                <Route path='/about' render={() => <About />} />
            </div>
        </div>
    );
}

export default App;
