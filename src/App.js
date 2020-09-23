import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import './scss/Base.scss';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className="content">
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/about' render={() => <About />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
