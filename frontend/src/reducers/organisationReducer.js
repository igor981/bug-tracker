import { ORGANISATION_FAIL, ORGANISATION_SUCCESS } from "../actions/types";


const initialState = {
    activeOrganisation: {},
    allOrganisations: []

}

const orgReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORGANISATION_SUCCESS:
            return {
                activeOrganisation: action.payload,
                allOrganisations: [...state.allOrganisations, action.payload]
            }
        case ORGANISATION_FAIL:
            
            return state;
    
        default:
            return state;
    }

}

export default orgReducer