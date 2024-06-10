import { React } from 'react';
import Header from '../components/Header';
import Service from '../components/Dashboard/Service';
import WhyUs from '../components/Dashboard/WhyUs'
import Testimonial from '../components/Dashboard/Testimonial'
import FAQ from '../components/Dashboard/FAQ'
import Footer from '../components/Footer'

export default function Dashboard() {      
    return (
        <>
            <Header/>
            <Service/>
            <WhyUs/>
            <Testimonial/>
            <FAQ/>
            <Footer/>
        </>
    );
}