import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import Home from './components/Home/Home';

const App = () => {    
    return (
        <BrowserRouter>
            <Navbar />
            <Categories />
            <Home />
        </BrowserRouter>
    );
}
 
export default App;