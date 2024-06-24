import React from 'react';
import NavProfile from '../components/NavProfile/NavProfile';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/EditCar/EditCar';

const EditCar: React.FC = () => {      
    return (
        <>
            <NavProfile/>
            <Sidebar/>
            <Main/>
        </>
    );
}

export default EditCar;