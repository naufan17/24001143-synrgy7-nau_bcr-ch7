import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import FilterCar from "../pages/FilterCar";
import Dashboard from "../pages/Dashboard";
import ListCar from "../pages/ListCar";
import NewCar from '../pages/NewCar';
import NotFound from '../pages/NotFound';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/cars" element = {<FilterCar/>}/>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/list-cars" element = {<ListCar/>}/>
            <Route path = "/new-car" element = {<NewCar/>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;