import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import loginImage from '../images/logoofregister.webp'; // Add the path to your image
import './Login.css'; // Custom CSS if needed
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    try {
      const res = await fetch('https://bloodconnects-8.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Successful login (status 200)
        if (data.message) {
          localStorage.setItem('token', data.token);
          window.alert('Login successful!');
          navigate('/search'); // Redirect to homepage or dashboard
        } else {
          window.alert('Unexpected response. Please try again.');
        }
      } else {
        // Handle error cases (422, 400, or 401)
        window.alert(data.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('Internal server error. Please try again later.');
    }
  };

  return (
    <div className="container-fluid login-container d-flex align-items-center justify-content-center">
      <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={loginImage}
            alt="Login"
            className="img-fluid w-100 h-100"
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 form-section p-5 bg-light">
          <h2 className="text-center mb-4 fw-bold">Login</h2>
          <form method="POST" onSubmit={handleSubmit}>
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
              // <label className="form-label">Email</label>
            </div>

            <div className="mb-4 position-relative">
              <input
                type="password"
                className="form-control styled-input"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              // <label className="form-label">Password</label>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Login
            </button>
          </form>

          {/* Register link */}
          <p className="text-center mt-3">
            Don't have an account?{' '}
            <span
              className="text-primary fw-bold"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/user')}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import loginImage from '../images/logoofregister.webp'; // Add the path to your image
// import './Login.css'; // Custom CSS if needed
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   // Handle input field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password } = user;

//     try {
//       const res = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         // Successful login (status 200)
//         if (data.message) {
//           localStorage.setItem('token', data.token);
//           window.alert('Login successful!');
//           navigate('/search'); // Redirect to homepage or dashboard
//         } else {
//           window.alert('Unexpected response. Please try again.');
//         }
//       } else {
//         // Handle error cases (422, 400, or 401)
//         window.alert(data.error || 'Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       window.alert('Internal server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="container-fluid login-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={loginImage}
//             alt="Login"
//             className="img-fluid w-100 h-100"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Login</h2>
//           <form method="POST" onSubmit={handleSubmit}>
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
//               <label className="form-label">Email</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="password"
//                 className="form-control styled-input"
//                 id="password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//               />
//               <label className="form-label">Password</label>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 fw-bold">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



