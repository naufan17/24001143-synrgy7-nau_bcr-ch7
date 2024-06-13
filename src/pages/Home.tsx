import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Service from '../components/Home/Service/Service';
import WhyUs from '../components/Home/WhyUs/WhyUs';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Rent from '../components/Home/Rent/Rent';
import FAQ from '../components/Home/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {      
    return (
        <>
            <Navbar/>
            <Header/>
            <Service/>
            <WhyUs/>
            <Testimonial/>
            <Rent/>
            <FAQ/>
            <Footer/>
        </>
    );
}

export default Home;