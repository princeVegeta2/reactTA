// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 - My React + Redux + TypeScript Project</p>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="/" className={styles.link}>Home</a>
          </li>
          <li>
            <a href="https://github.com/princeVegeta2/reactTA" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Repository
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
