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
        items: action.payload,
        loading: false,
        error: '',
      };
    case ActionTypes.FilterOnText:
      return {
        ...state,
        filter: action.value,
      };
    default:
      return state;
  }
};

export default PokeReducer;
