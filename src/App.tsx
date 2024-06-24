import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from "./routes/AppRoute";
import { AuthProvider } from './middleware/AuthProvider';

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <AppRoute/>
            </AuthProvider>
        </Router>
    );
}

export default App;