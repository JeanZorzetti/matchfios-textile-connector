import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const current = ref.current;
    if (current) {
      // Find all elements with scroll animation classes
      const animatedElements = current.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (current) {
        const animatedElements = current.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return ref;
};