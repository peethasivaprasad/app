import React, { useState } from 'react';

export default function Show_Hide() {
  const [show, setShow] = useState(false);

  const ShowHandle = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'red',
        }}
      >
        <div
          style={{
            border: '1px solid black',
            width: '600px',
            paddingLeft: '20px',
            backgroundColor: 'aliceblue',
            cursor: 'pointer',
          }}
          onClick={ShowHandle}
        >
          <h2>What is React?</h2>
        </div>

        {show && (
          <div
            style={{
              border: '1px solid black',
              width: '600px',
              paddingLeft: '20px',
              backgroundColor: 'aliceblue',
            }}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
