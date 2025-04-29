// src/components/animation/script.jsx
import React, { useEffect, useRef } from 'react';
import { animate, stagger, utils, createTimeline } from 'animejs';
import styles from './script.module.css';

export function Script() {
  const creatureRef = useRef(null);
  const animationTimeline = useRef(null); // Ref to store the timeline for cleanup

  useEffect(() => {
    // --- Configuration ---
    const rows = 20; // Original value
    const grid = [rows, rows];
    const from = 'center';
    const scaleStagger = stagger([2, 3.5], { ease: 'inQuad', grid, from });
    const opacityStagger = stagger([1, 0.5], { grid, from }); // Adjusted from 0.1 in original

    const creatureEl = creatureRef.current; // Get the actual DOM element
    if (!creatureEl) return; // Guard clause if ref is null

    // --- Particle Creation ---
    creatureEl.innerHTML = '';
    for (let i = 0; i < (rows * rows); i++) {
      const div = document.createElement('div');
      div.className = styles.particle;
      creatureEl.appendChild(div);
    }
    const particleEls = creatureEl.querySelectorAll(`.${styles.particle}`);
    if (particleEls.length === 0) return; // Guard clause if no particles found

    // --- Initial Styling ---
    utils.set(creatureEl, {
      width: `${rows * 10}em`,
      height: `${rows * 10}em`
    });

    utils.set(particleEls, {
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

    // --- Pulse Animation Function ---
    const pulse = () => {
      // Double-check particles exist before animating
      const currentParticles = creatureRef.current?.querySelectorAll(`.${styles.particle}`);
      if (!currentParticles || currentParticles.length === 0) return;

      animate(currentParticles, {
        keyframes: [
          {
            scale: 5,
            opacity: 1,
            delay: stagger(90, { start: 1650, grid, from }),
            duration: 150,
          }, {
            scale: scaleStagger, // Return to original staggered scale
            opacity: opacityStagger, // Return to original staggered opacity
            ease: 'inOutQuad',
            duration: 600
          }
        ],
      });
    };

    // --- Auto Pulse Timeline ---
    // Define callbacks DIRECTLY in the createTimeline options
    animationTimeline.current = createTimeline({
        loop: true,
        // Add callbacks here:
        onBegin: pulse, 
        onLoop: pulse,
    });

    // Add a dummy animation step to give the timeline a duration
    // and define the loop frequency. Adjust duration as needed.
    // The pulse function will be called based on the timeline's loop.
    animationTimeline.current.add({ duration: 5000 }); // Adjust duration for pulse frequency

    // NO LONGER NEEDED:
    // animationTimeline.current.eventCallback('onBegin', pulse);
    // animationTimeline.current.eventCallback('onLoop', pulse);

    // Start the timeline
    animationTimeline.current.play();

    // --- Cleanup Function ---
    return () => {
      if (animationTimeline.current) {
        animationTimeline.current.pause();
        // Anime.js v3 doesn't require removing callbacks manually like this
        // animationTimeline.current.eventCallback('onBegin', null); 
        // animationTimeline.current.eventCallback('onLoop', null);
      }
      // Ensure particles exist before trying to remove animation
      const currentParticles = creatureRef.current?.querySelectorAll(`.${styles.particle}`);
      if (currentParticles && currentParticles.length > 0) {
          animate.remove(currentParticles);
      }
      if (creatureRef.current) {
          creatureRef.current.innerHTML = '';
      }
    };

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className={styles.wrapper}>
      <div ref={creatureRef} className={styles.creature}></div>
    </div>
  );
}