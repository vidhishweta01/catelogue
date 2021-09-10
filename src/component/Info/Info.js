/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import styles from './Info.module.css';

const Info = ({ pokemon }) => {
  const {
    name, height, weight, base_experience, sprites, abilities, moves,
  } = pokemon;

  const {
    back_default, back_shiny, front_default, front_shiny,
  } = sprites;
  return (
    <section className={styles.info}>
      <div className={styles.imgContainer}>
        <img src={back_default} alt={name} />
        <img src={back_shiny} alt={name} />
        <img src={front_default} alt={name} />
        <img src={front_shiny} alt={name} />
      </div>
      <div className={styles.basicInfo}>
        <h3 className={styles.headers}>BasicInfo: </h3>
        <ol type="I" className={styles.ul}>
          <li className={styles.li}>{`name: ${name}`}</li>
          <li className={styles.li}>{`height: ${height}`}</li>
          <li className={styles.li}>{`weight: ${weight}`}</li>
          <li className={styles.li}>{`base_experience: ${base_experience}`}</li>
        </ol>
      </div>
      <div className={styles.ability}>
        <h3 className={styles.headers}>Abilites: </h3>
        <ol type="I" className={styles.ul}>
          {
          abilities.map((el) => <li className={styles.li} key={name}>{el.ability.name}</li>)
          }
        </ol>
      </div>

      <div className={styles.moves}>
        <h3 className={styles.headers}>Moves: </h3>
        <ol type="I" className={styles.ul}>
          {
            moves.map((el) => <li className={styles.li} key={name}>{el.move.name}</li>)
          }
        </ol>
      </div>
    </section>
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
