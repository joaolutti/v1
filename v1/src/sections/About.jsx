import React from 'react';
import styles from '../styles/sections/About.module.css';
import CodeBlock from '../components/CodeBlock';

export default function About() {

    return (

      <section id="about" className={styles.about}>
        <div className={styles.contentGrid}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Hey folks,</h1>
            <p className={styles.description}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat ullamcorper ornare sollicitudin; venenatis malesuada augue! At hendrerit quis commodo, tristique in torquent. Vivamus quisque diam facilisi porta, eu diam donec. Torquent amet a leo pellentesque mus.
            </p>
            <p className={styles.description}>
            Lorem ipsum odor amet  consectetuer adipiscing elit. Accumsan taciti himenaeos cras est nam gravida id finibus. Potenti nisi donec, augue maximus est amet. Maecenas habitasse euismod non ipsum scelerisque iaculis curae ligula.
            </p>
            <p className={styles.description}>
            Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.imageWrapper}>
              <img src='src/assets/pfp.jpg' alt='Joao Lutti' className={styles.pfp} />
            </div>
            <CodeBlock />
          </div>
        </div>


      </section>
    )

}
