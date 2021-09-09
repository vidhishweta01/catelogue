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
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FetchPokeFailure,
      error,
    });
  }
};

const FetchPokeInfo = (id, name) => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POKE_LOADING,
  });

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: ActionTypes.FETCH_POKE_INFO_SUCCESS,
      payload: response.data,
      pokemonName: name,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POKE_FAILURE,
      error,
    });
  }
};

export { FetchPokeData, FetchPokeInfo } ;
