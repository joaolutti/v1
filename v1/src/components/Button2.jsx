import React from 'react';
import styles from '../styles/components/Button2.module.css';

function Button2({ text, href }) {
  return (
    <a href={href} className={styles.button}>
      <span className={styles.text}>{text}</span>
    </a>
  );
}

export default Button2 