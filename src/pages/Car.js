import { React } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Car from '../components/Car/Car';
import Footer from '../components/Footer/Footer';

export default function Dashboard() {      
    return (
        <>
            <Navbar/>
            <Header/>
            <Car/>
            <Footer/>
        </>
    );
}