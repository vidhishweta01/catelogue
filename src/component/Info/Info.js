/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';

const Info = ({ pokemon }) => {
  const { name, height, base_experience } = pokemon;
  return (
    <div>
      <h3>{name}</h3>
      <p>{height}</p>
      <p>{base_experience}</p>
    </div>
  );
};

Info.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    height: propTypes.string.isRequired,
    base_experience: propTypes.string.isRequired,
  }).isRequired,
};

export default Info;
