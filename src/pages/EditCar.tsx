import React from 'react';
import NavProfile from '../components/Layout/NavProfile/NavProfile';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import Main from '../components/EditCar/EditCar';
import { useParams } from 'react-router-dom';

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