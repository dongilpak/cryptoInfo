import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Auth from './pages/Auth';

const Main = React.lazy(() => import('./pages/Main'));

function App() {
    return (
        <div className='container'>
            <Header />
            <Routes>
                {/* <Route path='/' Component={Home} />
                <Route path='/auth' Component={Auth} /> */}
                <Route path='/' Component={Main} />
            </Routes>
        </div>
    );
}

export default App;
