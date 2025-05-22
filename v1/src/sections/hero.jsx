import React from 'react';
import styles from '../styles/sections/Hero.module.css';
import NameTitle from '../components/NameTitle';
import Button from '../components/Button';
import { Script } from '../components/animation/script';
import Waves from '../components/animation/waves';
import { FaArrowDown } from 'react-icons/fa';

function Hero() {
  return (
      <section className={styles.hero}>
        <div className={styles.heroTextContainer}>
          <NameTitle text="João Lutti." />
          <p className={styles.subText}>Software Engineer</p>
          <div className={styles.actions}>
            <Button text="view my work" href="#projects" />
            <Button text="contact me" href="#contact" />
          </div>
        </div>
        <div className={styles.scrollArrow}>
          <FaArrowDown />
        </div>
      </section>
  );
}

export default Hero;
