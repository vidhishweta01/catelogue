/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';

const Info = ({ pokemon }) => {
  const {
    name, height, weight, base_experience, sprites, abilities, moves,
  } = pokemon;

  const {
    back_default, back_shiny, front_default, front_shiny,
  } = sprites;
  return (
    <>
      <div>
        <img src={back_default} alt={name} />
        <img src={back_shiny} alt={name} />
        <img src={front_default} alt={name} />
        <img src={front_shiny} alt={name} />
      </div>
      <div>
        <h3>{`name: ${name}`}</h3>
        <p>{`height: ${height}`}</p>
        <p>{`weight: ${weight}`}</p>
        <p>{`base_experience: ${base_experience}`}</p>
      </div>
      <div>
        <h3>abilites: </h3>
        <div>
          {
          abilities.map((el) => <span key={name}>{el.ability.name}</span>)
          }
        </div>
      </div>

      <div>
        <h3>moves: </h3>
        <ul>
          {
            moves.map((el) => <li key={name}>{el.move.name}</li>)
          }
        </ul>
      </div>
    </>
  );
};

Info.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string.isRequired,
    height: propTypes.string.isRequired,
    weight: propTypes.string.isRequired,
    base_experience: propTypes.string.isRequired,
    sprites: propTypes.shape({
      back_default: propTypes.string.isRequired,
      back_shiny: propTypes.string.isRequired,
      front_default: propTypes.string.isRequired,
      front_shiny: propTypes.string.isRequired,
    }).isRequired,
    abilities: propTypes.arrayOf(
      propTypes.shape({
        ability: propTypes.shape({
          name: propTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ),
    moves: propTypes.arrayOf(
      propTypes.shape({
        move: propTypes.shape({
          name: propTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default Info;
