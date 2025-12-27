import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedSection({ children, animation = 'fade-up', delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const animations = {
    'fade-up': 'opacity-0 translate-y-12',
    'fade-down': 'opacity-0 -translate-y-12',
    'fade-left': 'opacity-0 -translate-x-12',
    'fade-right': 'opacity-0 translate-x-12',
    'scale': 'opacity-0 scale-95',
    'scale-up': 'opacity-0 scale-90',
  };

  const visibleClass = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? visibleClass : animations[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;