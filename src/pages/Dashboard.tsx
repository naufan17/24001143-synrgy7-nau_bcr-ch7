import React from 'react';
import NavProfile from '../components/NavProfile/NavProfile';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Dashboard/Dashboard';
import TableOrder from '../components/Dashboard/TableOrder';

const Dashboard: React.FC = () => {      
    return (
        <>
            <NavProfile/>
            <Sidebar/>
            <div className="px-4 py-4 ml-16 sm:ml-20 mx-auto md:px-8 md:py-8">
                <Main/>
                <TableOrder/>
            </div>
        </>
    );
}

export default Dashboard;