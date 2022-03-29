import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router, Routes as Switch, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home.js";
import Profile from "./components/Profile";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import OrganisationMenu from "./pages/OrganisationMenu";
import Navbar from "./components/Navbar";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(clearMessage()); // clear message when changing location
  }, [dispatch]);


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
    <Router history={history}>
      <div>
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/organisations" element={<OrganisationMenu />} />
            <Route exact path="/org-create" element={<OrganisationMenu />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;