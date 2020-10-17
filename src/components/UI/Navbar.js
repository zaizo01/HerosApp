import React from 'react'
import { Link, NavLink } from 'react-router-dom';
  
export const Navbar = () => {
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

                        <div>
                            <NavLink
                            to="/LoginPage"
                            className="mr-4"
                            >
                            Login
                            </NavLink>
                        </div>
                        
                  </div>
              </nav>
      </header>
    )
}
