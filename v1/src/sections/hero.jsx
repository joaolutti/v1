import React from 'react';
import styles from '../styles/sections/Hero.module.css';
import NameTitle from '../components/NameTitle';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
// import { Script } from '../components/animation/script';

function Hero() {
  return (
    <div>
      <Navbar/>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <NameTitle text="João Lutti." />
          <p className={styles.subText}>Software Engineer</p>
          <div className={styles.actions}>
            <Button text="view my work" href="#projects" />
            <Button text="contact me" href="#contact" />
          </div>
        </div>
      </section>
      {/* <Script/> */}
    </div>
  );
}

export default Hero;
