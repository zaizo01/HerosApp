import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

  
export const Navbar = () => {

  const { user:{ name }, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
        history.replace('/LoginPage');
        dispatch({
          type: types.logout
        });
  }

    return (
      <header className="text-xl font-medium text-white bg-gray-900 shadow-sm text">
              <nav className="px-4 py-4">
                  <div className="flex flex-row justify-between">
                      <div>
                          <Link to="/" className="mr-4">Asocionaciones</Link>
    
                            <NavLink
                            to="/MarvelPage"
                            className="mr-4"
                            >
                            Marvel
                            </NavLink>
    
                            <NavLink
                            to="/DCPage"
                            className="mr-4"
                            >
                            DC
                            </NavLink>

                            <NavLink
                            to="/SearchPage"
                            className="mr-4"
                            >
                            Search
                            </NavLink>
                      </div>

                        <div className="flex">
                            <p className="pr-4 text-xl">{ name }</p>
                            <button
                            className="mr-4"
                            onClick={ handleLogout }
                            >
                            Logout
                            </button>
                        </div>
                        
                  </div>
              </nav>
      </header>
    )
}
