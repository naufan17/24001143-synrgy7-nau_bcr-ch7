import React from 'react';
import NavProfile from '../components/NavProfile/NavProfile';
import Sidebar from '../components/Sidebar/Sidebar';
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