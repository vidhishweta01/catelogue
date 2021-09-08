import InitialState from "../store/initialState";

const PokeReducer = (state = initialState, action) {
  switch(action.type )
  {
      case ActionTypes.FetchPokeLoading:
          return {
              ...state,
              loading: true,
              error: '',
          }
      case ActionTypes.FetchPokeFailure:
          return {
              ...state,
              loading: false,
              error: action.error,
          }
      case ActionTypes.FetchPokeSuccess:
          return {
              ...state,
              loading: false,
              error: '',
          }
    }
}

export default PokeReducer;