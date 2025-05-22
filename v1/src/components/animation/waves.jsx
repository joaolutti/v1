// Waves.jsx
import React, { useEffect, useRef } from 'react';
import styles from './waves.module.css';

export default function Waves() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current; // get the canvas element
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    //middle of canvas
    const centerX = width  / 2;
    const centerY = height / 2;

    // animation parameters
    const dotCount = 100;
    const rowCount = 10;
    const spacing = 15;
    const dotSpacing = 12;
    const startTime = performance.now();

    function drawFrame(now) {
      const t = (now - startTime) * 0.001; // seconds since start
      ctx.clearRect(0, 0, width, height);

      for (let row = 0; row < rowCount; row++) {
        // vertical positioning of this row
        const y0 = centerY + (row - (rowCount - 1) / 2) * spacing;
        const amplitude = 4 + row * 2;
        const freq      = 1 + row * 0.2;
        const phaseOff  = row * 0.5;

        for (let i = 0; i < dotCount; i++) {
          const x = centerX + (i - (dotCount - 1) / 2) * dotSpacing;
          const offsetY = Math.sin(t * freq + i * 0.2 + phaseOff) * amplitude;
          // Size of the square, analogous to the circle's diameter
          const squareSize = 4;
          ctx.beginPath();
          // Draw a square centered at (x, y0 + offsetY)
          ctx.fillRect(x - squareSize / 2, y0 + offsetY - squareSize / 2, squareSize, squareSize);
          ctx.fill();
        }
      }

      requestAnimationFrame(drawFrame);
    }

    // set up style once
    ctx.fillStyle = '#181818';
    requestAnimationFrame(drawFrame);
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        width={1000}
        height={180}
        className={styles.canvas}
      />
    </div>
  );
}
