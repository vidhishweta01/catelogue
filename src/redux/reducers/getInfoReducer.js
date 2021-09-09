import ActionTypes from '../actions/ActionTypes';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const getInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FetchPokeInfoLoading:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FetchPokeInfoSuccess:
      return {
        ...state,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
        loading: false,
        error: null,
      };

    case ActionTypes.FetchPokeInfoFailure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

export default getInfoReducer;