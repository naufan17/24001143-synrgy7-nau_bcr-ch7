import { React } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Service from '../components/Dashboard/Service/Service';
import WhyUs from '../components/Dashboard/WhyUs/WhyUs';
import Testimonial from '../components/Dashboard/Testimonial/Testimonial';
import Rent from '../components/Dashboard/Rent/Rent';
import FAQ from '../components/Dashboard/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

export default function Dashboard() {      
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