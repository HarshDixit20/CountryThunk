import { ADD_COUNTRY } from "../constant/country.constant";

const initialState = {
    countries: []
}

const CountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTRY:
            return {
                ...state,
                countries: [...action.payload]
            }
    
        default:
            return state
    }
}

export default CountryReducer;