import React, { useState } from 'react';

export default function BackGroundColors() {
  const [color, setColor] = useState('white');

  const HandleColor = (bgcolor) => {
    setColor(bgcolor);
  };

  return (
    <>
      <div style={{ backgroundColor: color, height: '100vh' }}>
        <button onClick={() => HandleColor('red')}>Red</button>
        <button onClick={() => HandleColor('green')}>Green</button>
        <button onClick={() => HandleColor('yellow')}>Yellow</button>
        <button onClick={() => HandleColor('blue')}>Blue</button>
        <button onClick={() => HandleColor('skyblue')}>Skyblue</button>
        <button onClick={() => HandleColor('orange')}>Orange</button>
        <button onClick={() => HandleColor('black')}>Black</button>
      </div>
    </>
  );
}
