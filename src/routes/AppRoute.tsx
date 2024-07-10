import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GuestRoute from '../middleware/GuestRoute';
import ProtectedRoute from '../middleware/ProtectRoute';
import Home from "../pages/Home";
import Login from "../pages/Login";
import SearchCar from "../pages/SearchCar";
import Dashboard from "../pages/Dashboard";
import ListCar from "../pages/ListCar";
import NewCar from '../pages/NewCar';
import EditCar from '../pages/EditCar';
import NotFound from '../pages/NotFound';

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/search-cars" element = {<SearchCar/>}/>
            <Route path = "/login" element = {<GuestRoute><Login/></GuestRoute>}/>
            <Route path = "/dashboard" element = {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path = "/list-cars" element = {<ProtectedRoute><ListCar/></ProtectedRoute>}/>
            <Route path = "/new-car" element = {<ProtectedRoute><NewCar/></ProtectedRoute>}/>
            <Route path = "/edit-car/:id" element = {<ProtectedRoute><EditCar/></ProtectedRoute>}/>
            <Route path = "*" element = {<NotFound/>}/>
        </Routes>
    );
}

export default AppRoute;