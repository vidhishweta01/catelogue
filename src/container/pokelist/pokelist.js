import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchPokeData from '../../redux/action/pokeAction';
import Poke from '../../component/poke';

const pokeList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PokeReducer);

  useEffect(() => {
    dispatch(FetchPokeData());
  }, []);
  const renderPokeList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const pokemon = state.items;
      return pokemon.map((poke, id) => <Poke key={poke.url} id={id + 1} pokemon={poke} />);
    }
    return <h1>cannot get pokemon list try again</h1>;
  };
  return (<div>{renderPokeList()}</div>);
};

export default pokeList;
