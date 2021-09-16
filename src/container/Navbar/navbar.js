import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Search from '../search';
import { filterOnText } from '../../redux/action/pokeAction';
import styles from './navbar.module.css';

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const nav = () => {
    if (pathname === '/') {
      return <Search />;
    }
    return null;
  };
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.links} onClick={() => dispatch(filterOnText(''))} to="/">Pokemon</NavLink>
      {nav()}
    </nav>
  );
};

export default Navbar;
