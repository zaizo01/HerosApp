import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginPage = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Zaiz'
            }
        });
        history.replace('/');
    }

    return (
        <div className="p-6">
            <h1 className="pb-3 text-3xl">Login Page</h1>
            <button
            className="px-10 py-4 font-semibold text-white bg-gray-900 rounded-lg"
            onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
