import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterOnText } from '../../redux/action/pokeAction';
import styles from './searchSubmit.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div className={styles.app}>
      <input value={input} type="text" className={styles.input} onChange={(e) => setInput(e.target.value)} placeholder="POKEMON" />
      <button type="button" onClick={() => dispatch(filterOnText(input))} className={styles.button}>Search Pokemon</button>
    </div>
  );
};

export default Search;
