import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return(
    <nav className={styles.navbar}>
      <div className={styles.year}>👋2025</div>
      <div className={styles.navbarLine}></div>
      <ul>
        <li><a href='#about'>about me!</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#projects'>projects</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
