import { useEffect, useLayoutEffect } from 'react';

export const useScrollRestoration = () => {
  useLayoutEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }, 200);
    }

    return () => {
      sessionStorage.removeItem('scrollPosition');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sessionStorage.setItem('scrollPosition', scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
