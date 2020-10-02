import React, { Fragment } from 'react'
import { MarvelPage } from '../components/Marvel/MarvelPage';
import { Navbar } from '../components/UI/Navbar';
import { DcPage } from '../components/DC/DcPage';
import { HerosPage } from '../components/Heros/HerosPage';

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';

export const DashboarRoutes = () => {
    return (
        <Fragment>
            <Navbar />

                <div className="p-6 flex justify-center">
                    <Switch>
                        <Route exact path='/MarvelPage'     component={ MarvelPage }/>
                        <Route exact path='/DCPage'         component={ DcPage }/>
                        <Route exact path='/hero/:heroeId' component={ HerosPage }/>

                        <Redirect to='/MarvelPage' />
                    </Switch>
                </div>  
        </Fragment>
    )
}
