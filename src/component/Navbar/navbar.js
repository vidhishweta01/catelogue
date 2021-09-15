import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from '../search';
import styles from './navbar.module.css';

const Navbar = () => {
  const { pathname } = useLocation();
  const nav = () => {
    if (pathname === '/') {
      return <Search />;
    }
    return null;
  };
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.links} to="/">Pokemon</NavLink>
      {nav()}
    </nav>
  );
};

export default Navbar;
