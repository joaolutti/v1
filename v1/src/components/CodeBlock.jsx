import React from 'react';
import styles from '../styles/components/CodeBlock.module.css';

const CodeBlock = () => {
  return (
    <div className={styles.codeContainer}>
      <div className={styles.controlsContainer}>
        <div className={`${styles.controlDot} ${styles.redDot}`}></div>
        <div className={`${styles.controlDot} ${styles.yellowDot}`}></div>
        <div className={`${styles.controlDot} ${styles.greenDot}`}></div>
      </div>
      <pre className={styles.code}>
        <code>
          {`const developer = {
  name: “João Lutti”
  location: “Calgary”
  education: “Software Engineering”
  interests:[‘Full-stack, ‘UI/UX’, ‘Hiking’, ‘🏐’],
  getContact: function() {
    return: ‘joao.lutti11@gmail.com’;
  }
          `}
        </code>
      </pre>

      </div>
  )
}

export default CodeBlock;
