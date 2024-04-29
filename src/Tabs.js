// import React, { useState } from 'react';

// export default function Tabs() {
//   const [tabs, setTabs] = useState(1);
//   const TabsHandle = () => {
//     setTabs(tabs);
//   };
//   return (
//     <>
//       <div>
//         <div style={{ backgroundColor: 'black', color: 'white', height: '100px' }}>
//           <ul
//             style={{
//               listStyle: 'none',
//               display: 'inline-flex',
//               margin: '20px',
//               marginTop: '30px',
//               fontSize: '1.5rem',
//               gap: '2rem',
//             }}
//           >
//             <li onClick={() => TabsHandle(1)} style={tabs === 1 ? { display: 'block' } : ''}>
//               Delhi
//             </li>
//             <li onClick={() => TabsHandle(2)} style={tabs === 2 ? { display: 'block' } : ''}>
//               Mumbai
//             </li>
//             <li onClick={() => TabsHandle(3)} style={tabs === 3 ? { display: 'block' } : ''}>
//               Hyderabad
//             </li>
//             <li onClick={() => TabsHandle(4)} style={tabs === 4 ? { display: 'block' } : ''}>
//               Bangalore
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div
//             style={{
//               backgroundColor: 'red',
//               height: '100px',
//               display: tabs === 1 ? 'none' : 'block',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//           <div
//             style={{
//               backgroundColor: 'green',
//               height: '100px',
//               display: tabs === 1 ? 'none' : 'block',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//           <div
//             style={{
//               backgroundColor: 'blue',
//               height: '100px',
//               display: tabs === 1 ? 'none' : 'block',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//           <div
//             style={{
//               backgroundColor: 'tomato',
//               height: '100px',
//               display: tabs === 1 ? 'none' : 'block',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from 'react';

// export default function Tabs() {
//   const [tabs, setTabs] = useState(1);

//   const handleTabs = (tab) => {
//     setTabs(tab);
//   };

//   return (
//     <>
//       <div>
//         <div style={{ backgroundColor: 'black', color: 'white', height: '100px' }}>
//           <ul
//             style={{
//               listStyle: 'none',
//               display: 'inline-flex',
//               margin: '20px',
//               marginTop: '30px',
//               fontSize: '1.5rem',
//               gap: '2rem',
//             }}
//           >
//             <li onClick={() => handleTabs(1)} style={{ display: tabs === 1 ? 'block' : 'none' }}>
//               Delhi
//             </li>
//             <li onClick={() => handleTabs(2)} style={{ display: tabs === 2 ? 'block' : 'none' }}>
//               Mumbai
//             </li>
//             <li onClick={() => handleTabs(3)} style={{ display: tabs === 3 ? 'block' : 'none' }}>
//               Hyderabad
//             </li>
//             <li onClick={() => handleTabs(4)} style={{ display: tabs === 4 ? 'block' : 'none' }}>
//               Bangalore
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div
//             style={{
//               backgroundColor: 'red',
//               height: '100px',
//               display: tabs === 1 ? 'block' : 'none',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//           <div
//             style={{
//               backgroundColor: 'green',
//               height: '100px',
//               display: tabs === 2 ? 'block' : 'none',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//           <div
//             style={{
//               backgroundColor: 'blue',
//               height: '100px',
//               display: tabs === 3 ? 'block' : 'none',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//           <div
//             style={{
//               backgroundColor: 'tomato',
//               height: '100px',
//               display: tabs === 4 ? 'block' : 'none',
//             }}
//           >
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
//             demonstrate the visual form of a document or a typeface without relying on meaningful
//             content. Lorem ipsum may be used as a placeholder before the final copy is available.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div style={{ backgroundColor: 'black', color: 'white', height: '100px' }}>
        <ul
          style={{
            listStyle: 'none',
            display: 'inline-flex',
            margin: '20px',
            marginTop: '30px',
            fontSize: '1.5rem',
            gap: '2rem',
          }}
        >
          <li
            onClick={() => handleTabClick(1)}
            style={{
              cursor: 'pointer',
              borderBottom: activeTab === 1 ? '' : 'none',
            }}
          >
            Delhi
          </li>
          <li
            onClick={() => handleTabClick(2)}
            style={{
              cursor: 'pointer',
              borderBottom: activeTab === 2 ? '' : 'none',
            }}
          >
            Mumbai
          </li>
          <li
            onClick={() => handleTabClick(3)}
            style={{
              cursor: 'pointer',
              borderBottom: activeTab === 3 ? '' : 'none',
            }}
          >
            Hyderabad
          </li>
          <li
            onClick={() => handleTabClick(4)}
            style={{
              cursor: 'pointer',
              borderBottom: activeTab === 4 ? '' : 'none',
            }}
          >
            Bangalore
          </li>
        </ul>
      </div>
      <div>
        <div
          style={{
            display: activeTab === 1 ? 'block' : 'none',
            backgroundColor: 'red',
            height: '100px',
          }}
        >
          Content for Delhi
        </div>
        <div
          style={{
            display: activeTab === 2 ? 'block' : 'none',
            backgroundColor: 'green',
            height: '100px',
          }}
        >
          Content for Mumbai
        </div>
        <div
          style={{
            display: activeTab === 3 ? 'block' : 'none',
            backgroundColor: 'blue',
            height: '100px',
          }}
        >
          Content for Hyderabad
        </div>
        <div
          style={{
            display: activeTab === 4 ? 'block' : 'none',
            backgroundColor: 'tomato',
            height: '100px',
          }}
        >
          Content for Bangalore
        </div>
      </div>
    </div>
  );
}
