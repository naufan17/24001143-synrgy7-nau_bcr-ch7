import React from 'react';
import Navbar from '../components/Layout/Navbar/Navbar';
import Header from '../components/Layout/Header/Header';
import Main from '../components/SearchCar/SearchCar';
import Footer from '../components/Layout/Footer/Footer';

const SearchCar: React.FC = () => {      
    return (
        <>
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default SearchCar;