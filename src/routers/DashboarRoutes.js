import React, { Fragment } from 'react'
import { MarvelPage } from '../components/Marvel/MarvelPage';
import { Navbar } from '../components/UI/Navbar';
import { DcPage } from '../components/DC/DcPage';
import { HerosApp } from '../HerosApp';

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from 'react-router-dom';

export const DashboarRoutes = () => {
    return (
        <Fragment>
            <Navbar />

                <div className="p-6">
                    <Switch>
                        <Route exact path='/MarvelPage'     component={ MarvelPage }/>
                        <Route exact path='/DCPage'         component={ DcPage }/>
                        <Route exact path='/heroe/:heroeId' component={ HerosApp }/>

                        <Redirect to='/MarvelPage' />
                    </Switch>
                </div>  
        </Fragment>
    )
}
