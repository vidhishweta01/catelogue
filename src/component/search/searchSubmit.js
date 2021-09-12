import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchResult from '../searchResult/searchResult';

const SearchForm = (Pokemon) => {
  const textInput = React.createRef();
  const { array } = Pokemon;
  const onOnclickHandler = (e) => {
    e.preventDefault();
    console.log(textInput.current.value); // eslint-disable-line
    const regex = new RegExp(textInput.current.value);
    const arr = array.map((obj, id) => {
      console.log(id); // eslint-disable-line
      console.log(obj); // eslint-disable-line
      if (regex.test(obj.name)) {
        console.log('i m here'); // eslint-disable-line
        return (
          <BrowserRouter>
            <SearchResult key={obj.url} id={id + 1} pokemon={obj} />
          </BrowserRouter>
        );
      }
      return (true);
    });

    ReactDOM.render(arr, document.getElementById('result'));
  };

  return (
    <div className="App">
      <input ref={textInput} type="text" />
      <button type="button" onClick={onOnclickHandler}>Search Pokemon</button>
      <div id="result" />
    </div>
  );
};

export default SearchForm;
