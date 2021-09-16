import axios from 'axios';
import ActionTypes from './actionTypes';

const FetchPokeData = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.FetchPokeLoading,
  });

  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=300 ');
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
    type: ActionTypes.FetchPokeInfoLoading,
  });

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: ActionTypes.FetchPokeInfoSuccess,
      payload: response.data,
      pokemonName: name,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FetchPokeInfoFailure,
      error,
    });
  }
};

const filterOnText = (value) => (
  {
    type: ActionTypes.FilterOnText,
    value,
  }
);

export { FetchPokeData, FetchPokeInfo, filterOnText };
