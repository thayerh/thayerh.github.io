import React, { useEffect, useRef } from 'react';

const FadeInContainer = ({children}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`fade-in-container ${containerRef.current ? '' : 'preload'}`} ref={containerRef}>
        {children}
    </div>
  );
};

export default FadeInContainer;
