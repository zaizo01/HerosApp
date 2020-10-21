import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import { LoginPage } from '../components/Login/LoginPage';
import { DashboarRoutes } from './DashboarRoutes';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes 
                        exact 
                        path='/LoginPage' 
                        component={ LoginPage }
                        isAutenticated={ user.logged }
                    />
                    <PrivateRoutes 
                        path='/' 
                        component={ DashboarRoutes }
                        isAutenticated={ user.logged }
                    />

                </Switch>
            </div>
        </Router>
    )
}
