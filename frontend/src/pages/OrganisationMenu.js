import React from 'react'
import OrganisationFalse from '../components/OrganisationFalse'
import { useSelector } from 'react-redux'
import OrganisationList from '../components/OrganisationList'

const OrganisationMenu = () => {
  const organisationsStore = useSelector(store => store.organisation)

  return (
    <div>
        <OrganisationFalse />
        <div className='org-menu'>
          {organisationsStore.allOrganisations.length <= 0 ? <OrganisationFalse /> : null }
           
        </div>

        <div className='org-menu'>
          <OrganisationList />
        </div>
    </div>
  )
}

export default OrganisationMenu