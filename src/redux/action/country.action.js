import { ADD_COUNTRY } from "../constant/country.constant";

export const addCountry = () => async(dispatch) =>  {

    let response = await fetch('https://restcountries.com/v3.1/all');

    let data = await response.json();

    dispatch({
        type : ADD_COUNTRY,
        payload: data
    })
}