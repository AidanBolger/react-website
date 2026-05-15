import React from 'react';
import '../../App.css';
import Home from '../Home';
import Footer from '../Footer';
import Cards from '../Projects';

function HomePage(){
    return(
        <>
            <Home />
            <Cards />
            <Footer />
        </>
    );
}

export default HomePage;

