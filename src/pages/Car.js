import { React } from 'react';
import Header from '../components/Header';
import Search from '../components/Car/Search'
import Car from '../components/Car/Car';
import Footer from '../components/Footer';

export default function Dashboard() {      
    return (
        <>
            <Header/>
            <Search/>
            <Car/>
            <Footer/>
        </>
    );
}