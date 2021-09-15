import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchPokeData } from '../../redux/action/pokeAction';
import Poke from '../../component/poke';

const pokeList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PokeReducer);

  useEffect(() => {
    dispatch(FetchPokeData());
  }, []);

  useEffect(() => {
  }, [state]);

  const renderPokeList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const pokemon = state.items;
      const regex = new RegExp(`^${state.filter.toLowerCase()}`);
      return pokemon.map((poke, id) => {  // eslint-disable-line
        if (regex.test(poke.name)) return <Poke key={poke.url} id={id + 1} pokemon={poke} />;
      });
    }
    return <h1>cannot get pokemon list try again</h1>;
  };
  return (<div>{renderPokeList()}</div>);
};

export default pokeList;
