import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import FilterCar from "../pages/FilterCar";
import Dashboard from "../pages/Dashboard";
import ListCar from "../pages/ListCar";
import NewCar from '../pages/NewCar';
import NotFound from '../pages/NotFound';
import GuestRoute from '../middleware/GuestRoute';
import ProtectedRoute from '../middleware/ProtectRoute';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/cars" element = {<FilterCar/>}/>
            <Route path = "/login" element = {<GuestRoute><Login/></GuestRoute>}/>
            <Route path = "/logout" element = {<ProtectedRoute><Logout/></ProtectedRoute>}/>
            <Route path = "/dashboard" element = {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path = "/list-cars" element = {<ProtectedRoute><ListCar/></ProtectedRoute>}/>
            <Route path = "/new-car" element = {<ProtectedRoute><NewCar/></ProtectedRoute>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;