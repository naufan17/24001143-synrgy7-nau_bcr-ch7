import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Car from "../pages/Car";

export default function AppRoute() {
    return (
        <Routes>
            <Route path = "/" Component = {Dashboard}/>
            <Route path = "/cars" Component = {Car}/>
        </Routes>
    );
}