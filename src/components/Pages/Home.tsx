/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import React, { useState, useEffect, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

const starStyle: CSSObject = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  backgroundColor: 'white',
  borderRadius: '50%',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
};

const containerStyle: CSSObject = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  overflow: 'hidden',
};

export default function Home(): React.JSX.Element {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const createStar = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;
    
    const newStar: Star = {
      id: nextId.current++,
      x,
      y,
      opacity: 0,
    };
    
    setStars(prev => [...prev, newStar]);
    
    // Use requestAnimationFrame for more efficient fade-in trigger
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setStars(prev => {
          const starIndex = prev.findIndex(star => star.id === newStar.id);
          if (starIndex === -1) return prev;
          
          const updatedStars = [...prev];
          updatedStars[starIndex] = { ...updatedStars[starIndex], opacity: 1 };
          return updatedStars;
        });
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (stars.length < 100) {
        createStar();
      }
    }, 500);
    return () => clearInterval(interval);
  }, [stars.length]);

  return (
    <div ref={containerRef} css={containerStyle}>
      {stars.map(star => (
        <div
          key={star.id}
          css={starStyle}
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}


