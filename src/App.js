import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/' render={() => <Home />} />
                <Route path='/about' render={() => <About />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
