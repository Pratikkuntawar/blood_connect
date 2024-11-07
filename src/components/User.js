import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import registerImage from '../images/logoofregister.webp'; // Replace with your actual image path
import './User.css'; // Custom CSS for styling
import { useNavigate } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, contact, email, password } = user;

    try {
      const res = await fetch('https://bloodconnects-8.onrender.com/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, contact, email, password }),
      });

      const data = await res.json();

      if (res.status === 422) {
        alert("All fields are required");
      } else if (res.status === 409) {
        alert("Email already exists");
      } else if (res.status === 201) {
        alert("Registration successful! Redirecting to login...");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        alert("An unexpected error occurred.");
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert("Internal server error");
    }
  };

  return (
    <div className="container-fluid register-container d-flex align-items-center justify-content-center">
      <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
        
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={registerImage}
            alt="Register"
            className="img-fluid w-100 h-100"
          />
        </div>

        <div className="col-md-6 form-section p-5 bg-light">
          <h2 className="text-center mb-4 fw-bold">Register as a User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 position-relative">
              <input
                type="text"
                className="form-control styled-input"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4 position-relative">
              <input
                type="tel"
                className="form-control styled-input"
                id="contact"
                name="contact"
                value={user.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
            </div>

            <div className="mb-4 position-relative">
              <input
                type="email"
                className="form-control styled-input"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4 position-relative">
              <input
                type="password"
                className="form-control styled-input"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold submit-btn"
            >
              Register Now
            </button>

            {/* Link to login if already have an account */}
            <div className="text-center mt-3">
              <p>
                Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: '#007bff' }}>Log in</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registerImage from '../images/logoofregister.webp'; // Replace with your actual image path
// import './User.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';

// function User() {
//   const [user, setUser] = useState({
//     name: '',
//     contact: '',
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, contact, email, password } = user;

//     try {
//       const res = await fetch('/register-user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, contact, email, password }),
//       });

//       const data = await res.json();

//       if (res.status === 422) {
//         alert("All fields are required");
//       } else if (res.status === 409) {
//         alert("Email already exists");
//       } else if (res.status === 201) {
//         alert("Registration successful! Redirecting to login...");
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         alert("An unexpected error occurred.");
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert("Internal server error");
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
        
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registerImage}
//             alt="Register"
//             className="img-fluid w-100 h-100"
//           />
//         </div>

//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Register as a User</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 id="name"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 id="contact"
//                 name="contact"
//                 value={user.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 id="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="password"
//                 className="form-control styled-input"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="Create a password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-100 fw-bold submit-btn"
//             >
//               Register Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registerImage from '../images/logoofregister.webp'; // Replace with your actual image path
// import './User.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';

// function User() {
//   const [user, setUser] = useState({
//     name: '',
//     contact: '',
//     email: '',
//     password: '',
//   });
//   const [message, setMessage] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, contact, email, password } = user;

//     try {
//       const res = await fetch('/register-user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, contact, email, password }),
//       });

//       const data = await res.json();

//       if (res.status === 422) {
//         setMessage("All fields are required");
//       } else if (res.status === 409) {
//         setMessage("Email already exists");
//       } else if (res.status === 201) {
//         setMessage("Registration successful! Redirecting to login...");
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setMessage("An unexpected error occurred.");
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       setMessage("Internal server error");
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Register as a User</h2>
//           {message && <div className="alert alert-info">{message}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 id="name"
//                 name="name"
//                 value={user.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               {/* <label className="form-label">Name</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 id="contact"
//                 name="contact"
//                 value={user.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//               {/* <label className="form-label">Contact</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 id="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               {/* <label className="form-label">Email</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="password"
//                 className="form-control styled-input"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="Create a password"
//                 required
//               />
//               {/* <label className="form-label">Password</label> */}
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-100 fw-bold submit-btn"
//             >
//               Register Now
//             </button>
//           </form>
//         </div>

//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registerImage}
//             alt="Register"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User;

