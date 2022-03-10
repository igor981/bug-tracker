import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrganisationFalse from '../components/OrganisationFalse.js'

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate()


    useEffect(() => {
      if (!currentUser) {
        navigate('login')
      }
      if (currentUser.organisation && currentUser.organisation.length === 0 ){
        navigate('org-create')
      }
   
    }, [])
    
  return (
    <div> 
      Home
    </div>
  )
}

export default Home