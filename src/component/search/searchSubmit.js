import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchResult from '../searchResult/searchResult';
import styles from './searchSubmit.module.css';

const SearchForm = (Pokemon) => {
  const textInput = React.createRef();
  const { array } = Pokemon;
  const onOnclickHandler = (e) => {
    e.preventDefault();
    const regex = new RegExp(`^${textInput.current.value}`);
    console.log(regex); // eslint-disable-line
    const arr = array.map((obj, id) => {
      if (regex.test(obj.name)) {
        document.getElementById('error').style.display = 'none';
        return (
          <BrowserRouter>
            <SearchResult key={obj.url} id={id + 1} pokemon={obj} />
          </BrowserRouter>
        );
      }
      return true;
    });

    ReactDOM.render(arr, document.getElementById('result'));
  };

  return (
    <div className={styles.app}>
      <input ref={textInput} type="text" className={styles.input} placeholder="POKEMON" />
      <button type="button" onClick={onOnclickHandler} className={styles.button}>Search Pokemon</button>
      <div id="result" />
    </div>
  );
};

export default SearchForm;
