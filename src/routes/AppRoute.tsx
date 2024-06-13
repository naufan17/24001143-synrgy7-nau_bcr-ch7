import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import FilterCar from "../pages/FilterCar";
import NotFound from '../pages/NotFound';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/cars" element = {<FilterCar/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;