import React from 'react';
import styles from './NameTitle.module.css';

function NameTitle({ text }) {
  return (
    <h1 className={styles.title}>{text}</h1>
  );
}

export default NameTitle; 