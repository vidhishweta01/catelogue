import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokeData } from '../../redux/action/pokeAction';
import SearchForm from './searchSubmit';

const Search = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PokeReducer);

  useEffect(() => {
    dispatch(FetchPokeData());
  }, []);
  const renderSearch = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const pokemon = state.items;
      return <SearchForm array={pokemon} />;
    }
    return <h1>cannot get pokemon list try again</h1>;
  };
  return (<div>{renderSearch()}</div>);
};

export default Search;
