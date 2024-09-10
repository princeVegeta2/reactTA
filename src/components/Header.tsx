// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <a href="https://github.com/princeVegeta2/reactTA" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Repository
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
