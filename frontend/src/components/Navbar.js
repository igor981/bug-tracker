import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes as Switch, Route, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth'; 
import './Navbar.css'
import { switchActiveOrg } from '../actions/organisation';


const Navbar = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const  organisation  = useSelector((state) => state.organisation);
  const dispatch = useDispatch()
 
  const handleOrgSwitch = (e) => {
      const newOrg = JSON.parse(e.target.value);
      dispatch(switchActiveOrg(newOrg))
  }
  const nameCheck = () => {
      console.log(organisation.activeOrganisation.organisationName, 'test');
      return organisation.activeOrganisation.organisationName
  }
  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Bug Tracker
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/organisations"} className="nav-link">
                Organisation
                </Link>
              </li>
            )}
          </div>
          { currentUser && organisation.allOrganisations !== null && organisation.allOrganisations.length > 0 ? 
          <>
          <div className='nav-item'>
              <p className='nav-active'>{organisation.activeOrganisation.organisationName}</p>
          </div>
          <select onChange={(e) => handleOrgSwitch(e)}  className='navbar-wheel'>
              <option value={''}>Org list</option>
              {organisation.allOrganisations.map((item, index) => {
                  return <option key={index} value={JSON.stringify(item)}>{item.organisationName}</option>
                })}
          </select> 
          
            </>
          
          : null}
          {currentUser ? (
              <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
              <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
  )
}

export default Navbar