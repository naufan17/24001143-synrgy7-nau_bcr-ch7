import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from "./routes/AppRoute";
import Navbar from './components/Navbar';

export default function App() {
    return (
        <Router>
            <Navbar/>
            <AppRoute/>
        </Router>
    );
}