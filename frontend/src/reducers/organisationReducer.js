import { ORGANISATION_FAIL, ORGANISATION_FETCH, ORGANISATION_SUCCESS, ORGANISATION_SWITCH } from "../actions/types";

const savedOrg = JSON.parse(localStorage.getItem('organisations'))
const currentUser = JSON.parse(localStorage.getItem("user"));
const initialState = savedOrg && currentUser ? savedOrg : {
    activeOrganisation: {},
    allOrganisations: []
}

const orgReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORGANISATION_SUCCESS:
            const newOrgState =  {
                activeOrganisation: action.payload.organisation,
                allOrganisations: [...state.allOrganisations, action.payload.organisation]
            }

            localStorage.setItem('organisations', JSON.stringify(newOrgState))

            return newOrgState
            case ORGANISATION_FAIL:
                
                return state;
                
            case ORGANISATION_FETCH:
                const fetchedOrgsState = {
                    ...state,
                    allOrganisations: [...action.payload]
                }
                
                localStorage.setItem('organisations', JSON.stringify(fetchedOrgsState))
                return fetchedOrgsState


            case ORGANISATION_SWITCH:
            
                const switchOrgState =  {
                    ...state,
                    activeOrganisation: action.payload,
                }
    
                localStorage.setItem('organisations', JSON.stringify(switchOrgState))

                return switchOrgState
            
    
        default:
            return state;
    }

}

export default orgReducer