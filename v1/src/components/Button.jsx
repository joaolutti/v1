import React from 'react';
import styles from './Button.module.css';

function Button({ text, href }) {
  return (
    <a href={href} className={styles.button}>
      {text}
    </a>
  );
}

export default Button; 