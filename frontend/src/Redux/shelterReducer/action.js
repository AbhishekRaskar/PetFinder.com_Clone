import axios from 'axios';
import { GET_SHELTER_FAILURE, GET_SHELTER_REQUEST, GET_SHELTER_SUCCESS } from './actionType';

export const getShelterData = (params) => async (dispatch) => {
  dispatch({ type: GET_SHELTER_REQUEST });
  console.log(params, "im");

  try {
    const response = await axios.get('https://petconnects-aml6.onrender.com/shelters/', {
      params: params.params,
    });

    dispatch({ type: GET_SHELTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_SHELTER_FAILURE });
  }
};
