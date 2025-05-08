import React, { useEffect, useRef } from 'react';
import { animate, stagger, utils, createTimeline, createTimer } from 'animejs';
import styles from './script.module.css';

export function Script() {
  const creatureRef = useRef(null);

  useEffect(() => {
    const rows = 10;
    const grid = [rows, rows];
    const from = 'center'; //'first', 'last'

    const viewport = { //limit how far the particles can move
      width: window.innerWidth * 0.5,
      height: window.innerHeight * 0.5,
    };
    const cursor = { x: 0, y: 0 }; //acts as an 'anchor'

    const scaleStagger = stagger([1, 2.5], { ease: 'inQuad', grid, from }); //can tweak with these
    const opacityStagger = stagger([1, 0.5], { grid, from });

    const creature = creatureRef.current; 

    creature.innerHTML = ''; //safety clean up
    for (let i = 0; i < (rows * rows); i++) {
      const div = document.createElement('div'); //create a div for each particle
      div.className = styles.particle; //add the particle class
      creature.appendChild(div); //append the div to the creature element
    }
    const particles = creature.querySelectorAll(`.${styles.particle}`); //stores all particles in var


    utils.set(creature, {
      width: `${rows * 10}em`,
      height: `${rows * 10}em`
    });

    utils.set(particles, {
      x: 0,
      y: 0,
      scale: scaleStagger,
      opacity: opacityStagger,
      background: stagger([80, 20], {
        grid, from,
        modifier: v => `#181818`,
      }),
      boxShadow: stagger([8, 1], {
        grid, from,
        modifier: v => `0px 0px ${utils.round(v, 0)}em 0px var(--black)`,
      }),
      zIndex: stagger([rows * rows, 1], { grid, from, modifier: () => 0 }),
    });

    //pulse animation
    const pulse = () => {
      animate(particles, {
        keyframes: [
          {
            scale: 5,
            opacity: 1,
            delay: stagger(90, { start: 1650, grid, from }),
            duration: 150,
          }, {
            scale: scaleStagger, 
            opacity: opacityStagger, 
            ease: 'inOutQuad',
            duration: 600
          }
        ],
      });
    };

    //main loop
    const mainLoop = createTimer({
      frameRate: 60,
      onUpdate: () => {
        animate(particles,{
          x:cursor.x,
          y:cursor.y,
          delay: stagger(40, {grid, from}),
          duration: stagger(120, {start: 750, ease: 'inQuad', grid, from}),
          ease: 'InOut',
          composition: 'blend',
        });
      },
    });
    mainLoop.play();
    
    const movement = createTimeline()
    .add(cursor, {
      x: [-viewport.width * 0.45, viewport.width * 0.45],
      modifier: x => x + Math.sin(mainLoop.currentTime * 0.0007)* viewport.width * 0.5,
      duration: 3000,
      ease: 'inOutExpo',
      alternate: true,
      loop: true,
      onBegin: pulse,
      onLoop: pulse,
    }, 0)
    .add(cursor, {
      y: [-viewport.height * 0.45, viewport.height * 0.45],
      modifier: y => y + Math.cos(mainLoop.currentTime * 0.00012)* viewport.height * 0.5,
      duration: 1000,
      ease: 'inOutQuad',
      alternate: true,
      loop: true,
    }, 0);
    movement.play();
    
    return () => {
      mainLoop.pause();
      movement.pause();
      creature.innerHTML = '';
    };

  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={creatureRef} className={styles.creature}></div>
    </div>
  );
}