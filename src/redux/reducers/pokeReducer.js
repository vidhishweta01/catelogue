import ActionTypes from '../action/actionTypes';
import InitialState from '../store/initialState';

const PokeReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.FetchPokeLoading:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ActionTypes.FetchPokeFailure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.FetchPokeSuccess:
      return {
        ...state,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};

export default PokeReducer;
