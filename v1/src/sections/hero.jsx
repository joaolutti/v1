import React from 'react';
import styles from '../styles/sections/Hero.module.css';
import NameTitle from '../components/NameTitle';
import Button from '../components/Button';
import { Script } from '../components/animation/script';
import Waves from '../components/animation/waves';

function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroTextContainer}>
          <NameTitle text="João Lutti." />
          <p className={styles.subText}>Software Engineer</p>
          <div className={styles.actions}>
            <Button text="view my work" href="#projects" />
            <Button text="contact me" href="#contact" />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.heroAnimationContainer}>
            <Waves />
          </div>
        </div>
      </section>
      {/* <Script/> */}
    </div>
  );
}

export default Hero;
