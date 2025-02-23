import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './middleware/AuthProvider';
import AppRoute from "./routes/AppRoute";

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