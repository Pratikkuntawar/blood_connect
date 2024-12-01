import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSearch, FaUserFriends, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import logo from '../images/blood-drop1.webp';
import './Navbar.css'; // Custom CSS for styling

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Toggle the navbar collapse state
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  // Close the navbar toggler when a link is clicked
  const closeNavbar = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger navbar-dark shadow-lg px-4">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
          <div className="logo-container me-3">
            <img 
              src={logo} 
              alt="Blood Donation Logo" 
              height="60px" 
              width="150px" 
              className="logo"
            />
          </div>
          <h3 className="mb-0 text-white brand-name">Blood Connect</h3>
        </NavLink>

        {/* Navbar toggle button for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          aria-controls="navbarSupportedContent" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div 
          className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} 
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/" activeClassName="active" onClick={closeNavbar}>
                <FaHome className="me-2" />Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/about" activeClassName="active" onClick={closeNavbar}>
                <FaInfoCircle className="me-2" />About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/search" activeClassName="active" onClick={closeNavbar}>
                <FaSearch className="me-2" />Search Donors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/user" activeClassName="active" onClick={closeNavbar}>
                <FaUserFriends className="me-2" />Users
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/login" activeClassName="active" onClick={closeNavbar}>
                <FaSignInAlt className="me-2" />Login
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link text-white nav-hover" to="/register" activeClassName="active" onClick={closeNavbar}>
                <FaUserPlus className="me-2" />Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaSearch, FaUserFriends, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
// import logo from '../images/blood-drop1.webp';
// import './Navbar.css'; // Custom CSS for styling

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-danger navbar-dark shadow-lg px-4">
//         {/* Logo */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <div className="logo-container me-3">
//             <img 
//               src={logo} 
//               alt="Blood Donation Logo" 
//               height="60px" 
//               width="150px" 
//               className="logo"
//             />
//           </div>
//           <h3 className="mb-0 text-white brand-name">Blood Connect</h3>
//         </NavLink>

//         {/* Navbar toggle button for mobile view */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto gap-3">
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/" activeClassName="active">
//                 <FaHome className="me-2" />Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/about" activeClassName="active">
//                 <FaInfoCircle className="me-2" />About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/search" activeClassName="active">
//                 <FaSearch className="me-2" />Search Donors
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/user" activeClassName="active">
//                 <FaUserFriends className="me-2" />Users
//               </NavLink>
//             </li>
//             {/* <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/login" activeClassName="active">
//                 <FaSignInAlt className="me-2" />Login
//               </NavLink>
//             </li> */}
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/register" activeClassName="active">
//                 <FaUserPlus className="me-2" />Register
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaSearch, FaUserFriends, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
// import logo from '../images/blooddonationlogo.webp';
// import './Navbar.css'; // Custom CSS for styling

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-danger navbar-dark shadow-lg px-4">
//         {/* Logo */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img 
//             src={logo} 
//             alt="Blood Donation Logo" 
//             height="60px" 
//             width="150px" 
//             className="me-3 logo-hover"
//           />
//           <h3 className="mb-0 text-white brand-name">Donate Blood</h3>
//         </NavLink>

//         {/* Navbar toggle button for mobile view */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto gap-3">
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/" activeClassName="active">
//                 <FaHome className="me-2" />Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/about" activeClassName="active">
//                 <FaInfoCircle className="me-2" />About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/search" activeClassName="active">
//                 <FaSearch className="me-2" />Search Donors
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/user" activeClassName="active">
//                 <FaUserFriends className="me-2" />Users
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/login" activeClassName="active">
//                 <FaSignInAlt className="me-2" />Login
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/register" activeClassName="active">
//                 <FaUserPlus className="me-2" />Register
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'react-router-dom';
// import logo from '../images/blooddonationlogo.webp';
// import './Navbar.css'; // Custom CSS for styling

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-lg">
//         {/* Logo */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img 
//             src={logo} 
//             alt="URL Shortener Logo" 
//             height="60px" 
//             width="150px" 
//             className="me-3 logo-hover"
//           />
//           <h3 className="mb-0 text-white brand-name">Donate Blood</h3>
//         </NavLink>

//         {/* Navbar toggle button for mobile view */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto gap-4">
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/" activeClassName="active">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/about" activeClassName="active">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/search" activeClassName="active">
//                 Search Donors
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/users" activeClassName="active">
//                 Users
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/login" activeClassName="active">
//                 Login
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link text-white nav-hover" to="/register" activeClassName="active">
//                 Register
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
