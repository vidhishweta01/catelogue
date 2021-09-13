import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <NavLink className={styles.links} to="/">Pokemon</NavLink>
  </nav>
);

export default Navbar;
