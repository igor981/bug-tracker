import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import OrganisationFalse from '../components/OrganisationFalse.js'

const Home = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
    <OrganisationFalse />
    </div>
  )
}

export default Home