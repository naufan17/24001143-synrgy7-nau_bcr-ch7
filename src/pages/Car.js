import { React } from 'react';
import Header from '../components/Header';
import Search from '../components/Car/Search'
import Footer from '../components/Footer';

export default function Dashboard() {      
    return (
        <>
            <Header/>
            <Search/>
            <Footer/>
        </>
    );
}