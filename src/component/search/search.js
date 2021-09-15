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

// const onOnclickHandler = (e) => {
//   e.preventDefault();
//   const regex = new RegExp(`^${textInput.current.value.toLowerCase()}`);
//   const arr = array.map((obj, id) => {
//     if (regex.test(obj.name)) {
//       document.getElementById('all').style.display = 'none';
//       return (
//         <BrowserRouter>
//           <Poke key={obj.url} id={id + 1} pokemon={obj} />
//         </BrowserRouter>
//       );
//     }
//     return true;
//   });
// };

/* <div className={styles.pokemons} id="all">
        {array.map((poke, id) => <Poke key={poke.url} id={id + 1} pokemon={poke} />)}
      </div> */
