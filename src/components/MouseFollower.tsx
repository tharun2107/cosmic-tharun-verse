
import { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (followerRef.current) {
        followerRef.current.style.left = `${clientX}px`;
        followerRef.current.style.top = `${clientY}px`;
      }
      
      if (trailRef.current) {
        setTimeout(() => {
          if (trailRef.current) {
            trailRef.current.style.left = `${clientX}px`;
            trailRef.current.style.top = `${clientY}px`;
          }
        }, 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 opacity-80 blur-sm"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)'
        }}
      />
      <div
        ref={trailRef}
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-40 opacity-40"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease'
        }}
      />
    </>
  );
};

export default MouseFollower;
