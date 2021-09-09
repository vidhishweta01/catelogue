import { combineReducers } from 'redux';
import PokeReducer from './pokeReducer';
import getInfoReducer from './getInfoReducer';

const rootReducer = combineReducers({
  PokeReducer,
  getInfoReducer,
});

export default rootReducer;
