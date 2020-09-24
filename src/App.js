import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import './scss/base.scss';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <div className="App">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route exact path='/about' render={() => <About />} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </div>
    );
}

export default App;
