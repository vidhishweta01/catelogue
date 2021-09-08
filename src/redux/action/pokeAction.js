import axios from 'axios';
import ActionTypes from './actionTypes';

const FetchPokeData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchPokeLoading,
  });

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ ');
    dispatch({
      type: ActionTypes.FetchPokeSuccess,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FetchPokeFailure,
      error,
    });
  }
};

export default FetchPokeData;
