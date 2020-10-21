import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

    return (
        
        <Route { ...rest }
            component={ (props) => (
                ( isAutenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/LoginPage" /> )    
            )}
        />
        
    )
}

PrivateRoutes.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}