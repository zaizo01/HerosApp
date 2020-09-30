import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { LoginPage } from '../components/Login/LoginPage';
import { DashboarRoutes } from './DashboarRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/LoginPage' component={ LoginPage }/>
                    <Route path='/' component={ DashboarRoutes }/>

                </Switch>
            </div>
        </Router>
    )
}
