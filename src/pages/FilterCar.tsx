import React from 'react';
import Navbar from '../components/Layout/Navbar/Navbar';
import Header from '../components/Layout/Header/Header';
import Main from '../components/FilterCar/FilterCar';
import Footer from '../components/Layout/Footer/Footer';

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