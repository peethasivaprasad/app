import React, { useState } from 'react';

export default function Model() {
  const [showImage, setShowImage] = useState(null);

  const ImageHandle = (myimage) => {
    setShowImage(myimage);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <img
          src='https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          style={{ width: '368px', height: '368px', objectFit: 'contain' }}
          onClick={() =>
            ImageHandle(
              'https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
        />
        <img
          src='https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          style={{ width: '368px', height: '368px', objectFit: 'contain' }}
          onClick={() =>
            ImageHandle(
              'https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
        />
        <img
          src='https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          style={{ width: '368px', height: '368px', objectFit: 'contain' }}
          onClick={() =>
            ImageHandle(
              'https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
        />
        <img
          src='https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          style={{ width: '368px', height: '368px', objectFit: 'contain' }}
          onClick={() =>
            ImageHandle(
              'https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
        />

        {showImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '500px',
                height: '500px',
                backgroundColor: 'white',
                opacity: 0.9,
                overflow: 'hidden',
                borderRadius: '10px',
              }}
            >
              <img
                src='https://images.unsplash.com/photo-1633526836603-72d24d6f54a3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <button
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#333',
                  borderRadius: '5px',
                  color: '#fff',
                }}
                onClick={() => setShowImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
