import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  // State to store cursor coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update state with current mouse position
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* This div will follow the cursor */}
      <div
        className="fixed w-8 h-8 bg-blue-500 rounded-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};

export default CursorFollower;
