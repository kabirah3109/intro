// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//  // src/components/Navbar.js
//   return (
//     <nav style={{
//       backgroundColor: '#0d6efd',
//       color: 'white',
//       padding: '1rem 2rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <img src="/img1.avif" alt="Logo" style={{ height: '40px' }} />
//         <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MyApp</span>
//       </div>

//       <div style={{ display: 'flex', gap: '2rem' }}>
//         <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
//         <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</Link>
//         <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>CONTACT</Link>
//         <Link to="/info" style={{ color: 'white', textDecoration: 'none' }}>INFO</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav 
//       style={{
//         backgroundImage: `url('public/img1.avif')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fallback + dark tint for readability
//         backgroundBlendMode: 'overlay',
//         padding: '1rem 2rem',
//       }}
//       className="text-white"
//     >
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//       }}>
        
//         {/* Logo Text */}
//         <div style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>
//           MyApp
//         </div>

//         {/* Navigation Links */}
//         <div style={{
//           display: 'flex',
//           gap: '2rem',
//           flexWrap: 'wrap',
//           justifyContent: 'center'
//         }}>
//           <Link to="/"   style={linkStyle}>HOME</Link>
//           <Link to="/about"   style={linkStyle}>ABOUT</Link>
//           <Link to="/contact" style={linkStyle}>CONTACT</Link>
//           <Link to="/info"   style={linkStyle}>INFO</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Reusable link style
// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   fontSize: '1.1rem',
//   fontWeight: '500',
//   transition: 'color 0.3s ease'
// };

// // Optional: Add hover effect
// const linkHover = {
//   color: '#ffff99'
// };


// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
 const Navbar =  () =>{
  return (
    <nav style={{
      backgroundColor: '#1a1a2e',
      color: 'white',
      padding: '1rem 2rem',
      display: 'center',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MyApp</div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/"           style={linkStyle}>HomeAsdasd</Link>
        <Link to="/about"      style={linkStyle}>About</Link>
        {/* <Link to="/contact"    style={linkStyle}>Contact</Link>
        <Link to="/info"       style={linkStyle}>Info</Link> */}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};
export default Navbar;