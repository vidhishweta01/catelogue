import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchPokeData from '../../redux/action/pokeAction';

const pokeList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.PokeReducer);

  useEffect(() => {
    dispatch(FetchPokeData());
  }, []);
  console.log(state); // eslint-disable-line
  console.log(state.items.length); // eslint-disable-line
  const renderPokeList = () => {
    if (state.loading) {
      return <h1>loading...</h1>;
    }

    if (state.items.length > 0) {
      const pokemon = state.items;
      return pokemon.map((poke) => (
        <p key={poke.url}>
          {poke.name}
          {' '}
        </p>
      ));
    }
    return <h1>cannot get pokemon list try again</h1>;
  };
  return (<div>{renderPokeList()}</div>);
};

export default pokeList;
