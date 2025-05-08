import React, { useState, useEffect, useRef } from 'react';
import styles from './NameTitle.module.css';

const glitchMap = {
  'o': '0',
  'i': '1',
  'u': '3',
  't': '7',
  'ã': '4',
}; //can add more here, just did ones applicable


function NameTitle({ text }) {
  const [glitchedText, setGlitchedText] = useState(text);
  const blinkTimeoutRef = useRef(null);

  useEffect(() => {
    setGlitchedText(text);

    const performSingleBlink = () => {
      const eligibleIndices = [];
      for (let i = 0; i < text.length; i++) {
        if (glitchMap[text[i].toLowerCase()]) {
          eligibleIndices.push(i);
        }
      }

      //randomly select one eligible index to glitch
      const randomIndex = eligibleIndices[Math.floor(Math.random() * eligibleIndices.length)];
      const charToGlitch = text[randomIndex].toLowerCase();
      
      let currentBlinkString = '';
      for (let i = 0; i < text.length; i++) {
        if (i === randomIndex) {
          currentBlinkString += glitchMap[charToGlitch];
        } else {
          currentBlinkString += text[i];
        }
      }

      //clear any existing timeouts
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
      }
      setGlitchedText(currentBlinkString)

      //timeout to rever to original text
      blinkTimeoutRef.current = setTimeout(() => {
        setGlitchedText(text);
        blinkTimeoutRef.current = null;
      }, 200);
    };


    const blinkAttemptIntervalId = setInterval(() => {
      if (Math.random() < 0.5) { // 50% chance to attempt a blink
        performSingleBlink();
      }
    }, 500); //interval for each blink attempt

    //
    return () => {
      clearInterval(blinkAttemptIntervalId);
      if (blinkTimeoutRef.current) {
        clearTimeout(blinkTimeoutRef.current);
        blinkTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <h1 className={styles.title}>{glitchedText}</h1>
  );
}

export default NameTitle; 