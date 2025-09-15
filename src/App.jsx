import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomeSection/Home";
import About from "./Pages/AboutSection/About";
import Contact from "./Pages/ContactSection/Contact";
import Info from "./Pages/InfoSection/Info";
import Navbar from "./Pages/NavbarSection/Navbar";

const App = () => {
  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Optional: Add a nav bar */}
        <nav
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem 4rem",
            backgroundColor: "#ced4da",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* <a href="/">Home</a>  */}
          <a href="/about">About</a>
          {/* <a href="/contact">Contact</a>  
         <a href="/info">Info</a> */}
        </nav>
      </div>

      <Routes>
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} /> */}
      </Routes>
    </>
  );
};

export default App;

// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Import Components
// import Home from './Pages/HomeSection/Home';
// import About from './Pages/AboutSection/About';
// import Contact from './Pages/ContactSection/Contact';
// import Info from './Pages/InfoSection/Info';
// import Navbar from './Pages/NavbarSection/Navbar'; // Optional: if you still want this component

// const App = () => {
//   return (
//     <Router>
//       <div style={styles.container}>

//         {/* Styled Navbar */}
//         <nav style={styles.navbar}>
//           <div style={styles.logo}>My Portfolio</div>

//           <div style={styles.navLinks}>
//             <Link to="/home"   style={styles.link}>HomeAsdasd</Link>
//             <Link to="/about"  style={styles.link}>About</Link>
//             <Link to="/contact" style={styles.link}>Contact</Link>
//             <Link to="/info"   style={styles.link}>Info</Link>
//           </div>
//         </nav>

//         {/* Page Content */}
//         <main style={styles.main}>
//           <Routes>
//             <Route path="/navbar" element={<Navbar />} />
//             <Route path="/home"   element={<Home />} />
//             <Route path="/about"  element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/info"   element={<Info />} />

//             {/* Optional: Redirect root to /home */}
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// // export default App;

// // 💅 Styling Object – Clean Grey Theme
// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundColor: '#f5f5f5',
//     margin: 0,
//     padding: 0,
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   navbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#2c2c2c', // Dark grey
//     padding: '1rem 3rem',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     position: 'sticky',
//     top: 0,
//     zIndex: 1000,
//   },
//   logo: {
//     fontSize: '1.8rem',
//     fontWeight: '600',
//     color: '#ffffff',
//   },
//   navLinks: {
//     display: 'flex',
//     gap: '2.5rem',
//   },
//   link: {
//     color: '#e0e0e0', // Light grey
//     textDecoration: 'none',
//     fontSize: '1.1rem',
//     fontWeight: '500',
//     transition: 'color 0.3s ease, transform 0.2s ease',
//     padding: '0.5rem 0.8rem',
//     borderRadius: '6px',
//   },
//   // Hover effect
//   hoverLink: {
//     color: '#ffffff',
//     backgroundColor: '#4a4a4a',
//   },
// };
