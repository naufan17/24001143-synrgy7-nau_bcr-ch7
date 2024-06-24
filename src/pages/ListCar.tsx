import React from 'react';
import NavProfile from '../components/Layout/NavProfile/NavProfile';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import Main from '../components/ListCar/ListCar';

const ListCar: React.FC = () => {      
    return (
        <>
            <NavProfile/>
            <Sidebar/>
            <Main/>
        </>
    );
}

export default ListCar;