import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

    return (
        
        <Route { ...rest }
            component={ (props) => (
                ( !isAutenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to='/' /> )    
            )}
        />
        
    )
}

PublicRoutes.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}