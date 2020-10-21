import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';

import { LoginPage } from '../components/Login/LoginPage';
import { DashboarRoutes } from './DashboarRoutes';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/LoginPage' component={ LoginPage }/>
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
