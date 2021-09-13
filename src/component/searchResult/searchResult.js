import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from './SearchResult.module.css';

const SearchResult = ({ pokemon, id }) => {
  const { name } = pokemon;
  return (
    <div className={styles.card}>
      <div className={styles.pokemon}>
        <img className={styles.img} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} alt={name} />
        <span className={styles.title}>{name}</span>
      </div>
      <Link target="_blank" to={`/pokemon/${name}/${id}`} value={id} className={styles.link}>View</Link>
    </div>
  );
};

SearchResult.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
  }).isRequired,
  id: propTypes.number.isRequired,
};

export default SearchResult;
