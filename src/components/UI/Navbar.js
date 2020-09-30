import React from 'react'
import { Link, NavLink } from 'react-router-dom';
  
export const Navbar = () => {
    return (
      <header className="bg-gray-900 text-xl text-white font-semibold shadow-sm">
              <nav className="py-4 px-4">
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
