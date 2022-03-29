import React from 'react'
import { useSelector } from 'react-redux';


const OrganisationList = () => {
    const  {activeOrganisation, allOrganisations}  = useSelector((state) => state.organisation);

  return (
    <div className="organisation">
    <div className="organisation__create">
      <h2>All organisations</h2>
      <ul>
          {allOrganisations.length > 0 ? allOrganisations.map((item, index) => <li key={index}>{item.organisationName}</li>) : null}
      </ul>
      
    </div>
    <div className="organisation__join">
      <h2>Join an organisation</h2>
      <p>Click on an invitation link to join an organisation.</p>
    </div>
  </div>
  )
}

export default OrganisationList