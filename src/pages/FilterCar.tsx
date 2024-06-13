import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Main from '../components/FilterCar/FilterCar';
import Footer from '../components/Footer/Footer';

const FilterCar: React.FC = () => {      
    return (
        <>
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default FilterCar;