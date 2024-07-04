import React from 'react';
import { useParams } from 'react-router-dom';
import NavProfile from '../components/Layout/NavProfile/NavProfile';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import Main from '../components/EditCar/EditCar';

const EditCar: React.FC = () => {
    const {id} = useParams();

    return (
        <>
            <NavProfile/>
            <Sidebar/>
            <Main
                id={id} 
            />
        </>
    );
}

export default EditCar;