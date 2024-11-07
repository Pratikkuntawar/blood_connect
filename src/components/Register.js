import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    age: '',
    weight: '',
    bloodGroup: '',
    city: '',
    status: 'Available'
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Age validation
    if (formData.age < 18) {
      alert("Age must be greater than or equal to 18");
      return;
    }

    // Weight validation
    if (formData.weight < 45) {
      alert("Weight must be greater than 45 kg");
      return;
    }

    // Camel case the city name before sending it to the backend
    const camelCaseCity = formData.city
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const formattedData = { ...formData, city: camelCaseCity };

    try {
      const response = await fetch('https://bloodconnects-8.onrender.com/register-donor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Donor registered successfully!"); // Show success message in alert
      } else {
        alert(`Registration failed: ${data.error || "An error occurred."}`); // Show error message in alert
      }
    } catch (error) {
      alert("Error registering donor. Please try again later."); // Show network error message in alert
      console.error("Error:", error);
    }
  };

  return (
    <div className='pra'>
    <div className="donor-registration-container">
      <h2>Donor Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Weight (kg)</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <label>Blood Group</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your blood group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleCityChange}
          required
        />

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Available">Available</option>
          <option value="NA">NA</option>
        </select>

        <button type="submit">Register Donor</button>
      </form>
                  <button 
            className="btn btn-secondary custom-button w-100 mt-3 fw-bold" 
            onClick={() => navigate('/update-donor')}
          >
            Update Profile
          </button>
    </div>
    </div>
  );
};

export default Register;


// import React, { useState } from 'react';
// import './Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCityChange = (e) => {
//     setFormData({ ...formData, city: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Camel case the city name before sending it to the backend
//     const camelCaseCity = formData.city
//       .toLowerCase()
//       .split(' ')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');

//     const formattedData = { ...formData, city: camelCaseCity };

//     try {
//       const response = await fetch('https://bloodconnects-7.onrender.com/register-donor', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formattedData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Donor registered successfully!"); // Show success message in alert
//       } else {
//         alert(`Registration failed: ${data.error || "An error occurred."}`); // Show error message in alert
//       }
//     } catch (error) {
//       alert("Error registering donor. Please try again later."); // Show network error message in alert
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="donor-registration-container">
//       <h2>Donor Registration</h2>
//       <form className="registration-form" onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//           required
//         />

//         <label>Age</label>
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />

//         <label>Weight (kg)</label>
//         <input
//           type="number"
//           name="weight"
//           value={formData.weight}
//           onChange={handleChange}
//           required
//         />

//         <label>Blood Group</label>
//         <select
//           name="bloodGroup"
//           value={formData.bloodGroup}
//           onChange={handleChange}
//           required
//         >
//           <option value="" disabled>Select your blood group</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//         </select>

//         <label>City</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleCityChange}
//           required
//         />

//         <label>Status</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//         >
//           <option value="Available">Available</option>
//           <option value="NA">NA</option>
//         </select>

//         <button type="submit">Register Donor</button>
//       </form>
//     </div>
//   );
// };

// export default Register;








// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './Register.css'; // Custom CSS for styling
// import registrationImage from '../images/registerblood.webp';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const toCamelCase = (str) => {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedFormData = {
//       ...formData,
//       city: toCamelCase(formData.city),
//     };

//     try {
//       const response = await fetch('https://bloodconnects-7.onrender.com/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formattedFormData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//         navigate('/'); 
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || 'Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <div className="register-image">
//           <img src={registrationImage} alt="Registration" />
//         </div>
//         <div className="register-form-container">
//           <h2 className="text-center mb-4 fw-bold">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Enter your age"
//                 required
//                 min="18"
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="Enter your weight (kg)"
//                 required
//                 min="45"
//               />
//             </div>
//             <div className="mb-3">
//               <select
//                 name="bloodGroup"
//                 className="form-select styled-input"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                   <option key={bloodType} value={bloodType}>{bloodType}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Status</label>
//               <select
//                 name="status"
//                 className="form-select styled-input"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Available">Available</option>
//                 <option value="NA">Not Available</option>
//               </select>
//             </div>
//             <button type="submit" className="btn btn-danger w-100 fw-bold submit-btn">
//               Register
//             </button>
//           </form>
//           <button 
//             className="btn btn-secondary custom-button w-100 mt-3 fw-bold" 
//             onClick={() => navigate('/update-donor')}
//           >
//             Update Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './Register.css'; // Custom CSS for styling
// import registrationImage from '../images/registerblood.webp';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const toCamelCase = (str) => {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedFormData = {
//       ...formData,
//       city: toCamelCase(formData.city),
//     };

//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formattedFormData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//         navigate('/'); 
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || 'Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <div className="register-image">
//           <img src={registrationImage} alt="Registration" />
//         </div>
//         <div className="register-form-container">
//           <h2 className="text-center mb-4 fw-bold">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Enter your age"
//                 required
//                 min="18"
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="Enter your weight (kg)"
//                 required
//                 min="45"
//               />
//             </div>
//             <div className="mb-3">
//               <select
//                 name="bloodGroup"
//                 className="form-select styled-input"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                   <option key={bloodType} value={bloodType}>{bloodType}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Status</label>
//               <select
//                 name="status"
//                 className="form-select styled-input"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Available">Available</option>
//                 <option value="NA">Not Available</option>
//               </select>
//             </div>
//             <button type="submit" className="btn btn-danger w-100 fw-bold submit-btn">
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registrationImage from '../images/registerblood.webp';// Replace with the actual path to your image
// import './Register.css'; // Custom CSS for styling
 // import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available' // Default status value
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to convert city name to camel case
//   const toCamelCase = (str) => {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Format city name to camel case
//     const formattedFormData = {
//       ...formData,
//       city: toCamelCase(formData.city),
//     };

//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formattedFormData), // Send the formatted formData including the status
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//         // Redirect after successful registration
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || 'Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registrationImage}
//             alt="Donate Blood"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {/* Input Fields */}
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Enter your age"
//                 required
//                 min="18"
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="Enter your weight (kg)"
//                 required
//                 min="45"
//               />
//             </div>

//             <div className="mb-4 position-relative">
//               <select
//                 name="bloodGroup"
//                 className="form-select styled-input"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                   <option key={bloodType} value={bloodType}>{bloodType}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 required
//               />
//             </div>

//             {/* Status Field */}
//             <div className="mb-4">
//               <label className="form-label">Status</label>
//               <select
//                 name="status"
//                 className="form-select styled-input"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Available">Available</option>
//                 <option value="NA">Not Available</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-danger w-100 fw-bold submit-btn"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registrationImage from '../images/registrationofblood.webp'; // Replace with the actual path to your image
// import './Register.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available' // Default status value
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Send the formData including the status
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//   // Redirect after successful registration
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || 'Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registrationImage}
//             alt="Donate Blood"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {/* Input Fields */}
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               {/* <label className="form-label">Name</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               {/* <label className="form-label">Email</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//               {/* <label className="form-label">Contact Number</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Enter your age"
//                 required
//                 min="18"
//               />
//               {/* <label className="form-label">Age</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="Enter your weight (kg)"
//                 required
//                 min="45"
//               />
//               {/* <label className="form-label">Weight</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <select
//                 name="bloodGroup"
//                 className="form-select styled-input"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                   <option key={bloodType} value={bloodType}>{bloodType}</option>
//                 ))}
//               </select>
//               {/* <label className="form-label">Blood Group</label> */}
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 required
//               />
//               {/* <label className="form-label">City</label> */}
//             </div>

//             {/* Status Field */}
//             <div className="mb-4">
//               <label className="form-label">Status</label>
//               <select
//                 name="status"
//                 className="form-select styled-input"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <option value="Available">Available</option>
//                 <option value="NA">Not Available</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-danger w-100 fw-bold submit-btn"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registrationImage from '../images/registrationofblood.webp'; // Replace with the actual path to your image
// import './Register.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//         // Redirect after successful registration
//         navigate('/success'); // Change to your success route
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || 'Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4">
//         {/* Image Section */}
//         <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registrationImage}
//             alt="Donate Blood"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               <label className="form-label">Name</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               <label className="form-label">Email</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//               <label className="form-label">Contact Number</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Enter your age"
//                 required
//                 min="18"
//               />
//               <label className="form-label">Age</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="Enter your weight (kg)"
//                 required
//                 min="45"
//               />
//               <label className="form-label">Weight</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <select
//                 name="bloodGroup"
//                 className="form-select styled-input"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                   <option key={bloodType} value={bloodType}>{bloodType}</option>
//                 ))}
//               </select>
//               <label className="form-label">Blood Group</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 required
//               />
//               <label className="form-label">City</label>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-danger w-100 fw-bold submit-btn"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import registrationImage from '../images/registrationofblood.webp'; // Replace with the actual path to your image
// import './Register.css'; // Custom CSS for styling
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//  // Redirect after successful registration
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || 'Registration failed');
//       }
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container-fluid register-container d-flex align-items-center justify-content-center">
//       <div className="row w-75 shadow-lg rounded-4 overflow-hidden">
//          {/* Image Section */}
//          <div className="col-md-6 d-none d-md-block p-0">
//           <img
//             src={registrationImage}
//             alt="Donate Blood"
//             className="img-fluid w-100 h-100"
//           />
//         </div>
//         {/* Form Section */}
//         <div className="col-md-6 form-section p-5 bg-light">
//           <h2 className="text-center mb-4 fw-bold">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 required
//               />
//               <label className="form-label">Name</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="email"
//                 className="form-control styled-input"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//               <label className="form-label">Email</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="tel"
//                 className="form-control styled-input"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//                 required
//               />
//               <label className="form-label">Contact Number</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 placeholder="Enter your age"
//                 required
//                 min="18"
//               />
//               <label className="form-label">Age</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="number"
//                 className="form-control styled-input"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 placeholder="Enter your weight (kg)"
//                 required
//                 min="45"
//               />
//               <label className="form-label">Weight</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <select
//                 name="bloodGroup"
//                 className="form-select styled-input"
//                 value={formData.bloodGroup}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                   <option key={bloodType} value={bloodType}>{bloodType}</option>
//                 ))}
//               </select>
//               <label className="form-label">Blood Group</label>
//             </div>

//             <div className="mb-4 position-relative">
//               <input
//                 type="text"
//                 className="form-control styled-input"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Enter your city"
//                 required
//               />
//               <label className="form-label">City</label>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-danger w-100 fw-bold submit-btn"
//             >
//               Register
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../images/registrationofblood.webp'; // Path to the image

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   // Handle input field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Show success message using browser alert
//         alert(data.message);
//       } else {
//         // Show error message using browser alert
//         alert(data.error || 'Registration failed');
//       }
//     } catch (error) {
//       // Show error message using browser alert
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded align-items-stretch">
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 d-flex align-items-center justify-content-center img-container">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 d-flex flex-column justify-content-center form-container" style={{ height: '100%' }}>
//           <h2 className="mb-2 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {Object.keys(formData).map((key) => (
//               <div className="mb-3" key={key}>
//                 <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                 {key === 'bloodGroup' || key === 'status' ? (
//                   <select name={key} className="form-select" value={formData[key]} onChange={handleChange} required>
//                     {key === 'bloodGroup' && (
//                       <>
//                         <option value="">Select</option>
//                         {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                           <option value={bloodType} key={bloodType}>{bloodType}</option>
//                         ))}
//                       </>
//                     )}
//                     {key === 'status' && (
//                       <>
//                         <option value="Available">Available</option>
//                         <option value="NA">NA</option>
//                       </>
//                     )}
//                   </select>
//                 ) : (
//                   <input 
//                     type={key === 'age' || key === 'weight' ? 'number' : 'text'}
//                     name={key}
//                     className="form-control" 
//                     value={formData[key]} 
//                     onChange={handleChange} 
//                     required 
//                     min={key === 'age' ? '18' : key === 'weight' ? '45' : undefined} 
//                   />
//                 )}
//               </div>
//             ))}
//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../images/registrationofblood.webp'; // Path to the image

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false); // State to determine alert type

//   // Handle input field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage(data.message);
//         setIsError(false); // Successful registration
//       } else {
//         setMessage(data.error || 'Registration failed');
//         setIsError(true); // Failed registration
//       }
//     } catch (error) {
//       setMessage('Registration failed: ' + error.message);
//       setIsError(true); // Catch any other errors
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded align-items-stretch">
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 d-flex align-items-center justify-content-center img-container">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 d-flex flex-column justify-content-center form-container" style={{ height: '100%' }}>
//           <h2 className="mb-4 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {Object.keys(formData).map((key) => (
//               <div className="mb-3" key={key}>
//                 <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                 {key === 'bloodGroup' || key === 'status' ? (
//                   <select name={key} className="form-select" value={formData[key]} onChange={handleChange} required>
//                     {key === 'bloodGroup' && (
//                       <>
//                         <option value="">Select</option>
//                         {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                           <option value={bloodType} key={bloodType}>{bloodType}</option>
//                         ))}
//                       </>
//                     )}
//                     {key === 'status' && (
//                       <>
//                         <option value="Available">Available</option>
//                         <option value="NA">NA</option>
//                       </>
//                     )}
//                   </select>
//                 ) : (
//                   <input 
//                     type={key === 'age' || key === 'weight' ? 'number' : 'text'}
//                     name={key}
//                     className="form-control" 
//                     value={formData[key]} 
//                     onChange={handleChange} 
//                     required 
//                     min={key === 'age' ? '18' : key === 'weight' ? '45' : undefined} 
//                   />
//                 )}
//               </div>
//             ))}
//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>

//           {/* Display success or error message as an alert */}
//           {message && (
//             <div className={`mt-3 alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
//               {message}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../images/registrationofblood.webp'; // Add your image path here

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const [message, setMessage] = useState('');
//   const [isError, setIsError] = useState(false); // State to handle error or success

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage(data.message);
//         setIsError(false); // Success message
//       } else {
//         setMessage(data.error || 'Registration failed');
//         setIsError(true); // Error message
//       }
//     } catch (error) {
//       setMessage('Registration failed: ' + error.message);
//       setIsError(true); // Error message
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded align-items-stretch">
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 d-flex align-items-center justify-content-center img-container">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 d-flex flex-column justify-content-center form-container" style={{ height: '100%' }}>
//           <h2 className="mb-4 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {Object.keys(formData).map((key) => (
//               <div className="mb-3" key={key}>
//                 <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                 {key === 'bloodGroup' || key === 'status' ? (
//                   <select name={key} className="form-select" value={formData[key]} onChange={handleChange} required>
//                     {key === 'bloodGroup' && (
//                       <>
//                         <option value="">Select</option>
//                         {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                           <option value={bloodType} key={bloodType}>{bloodType}</option>
//                         ))}
//                       </>
//                     )}
//                     {key === 'status' && (
//                       <>
//                         <option value="Available">Available</option>
//                         <option value="NA">NA</option>
//                       </>
//                     )}
//                   </select>
//                 ) : (
//                   <input 
//                     type={key === 'age' || key === 'weight' ? 'number' : 'text'}
//                     name={key}
//                     className="form-control" 
//                     value={formData[key]} 
//                     onChange={handleChange} 
//                     required 
//                     min={key === 'age' ? '18' : key === 'weight' ? '45' : undefined} 
//                   />
//                 )}
//               </div>
//             ))}
//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>

//           {/* Display success or error message as alert */}
//           {message && (
//             <div className={`mt-3 alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
//               {message}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../images/registrationofblood.webp'; // Add your image path here

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error || 'Registration failed');
//       }
//     } catch (error) {
//       setMessage('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded align-items-stretch"> {/* Ensure equal height */}
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 d-flex align-items-center justify-content-center img-container">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 d-flex flex-column justify-content-center form-container" style={{ height: '100%' }}>
//           <h2 className="mb-4 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {Object.keys(formData).map((key) => (
//               <div className="mb-3" key={key}>
//                 <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                 {key === 'bloodGroup' || key === 'status' ? (
//                   <select name={key} className="form-select" value={formData[key]} onChange={handleChange} required>
//                     {key === 'bloodGroup' && (
//                       <>
//                         <option value="">Select</option>
//                         {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                           <option value={bloodType} key={bloodType}>{bloodType}</option>
//                         ))}
//                       </>
//                     )}
//                     {key === 'status' && (
//                       <>
//                         <option value="Available">Available</option>
//                         <option value="NA">NA</option>
//                       </>
//                     )}
//                   </select>
//                 ) : (
//                   <input 
//                     type={key === 'age' || key === 'weight' ? 'number' : 'text'}
//                     name={key}
//                     className="form-control" 
//                     value={formData[key]} 
//                     onChange={handleChange} 
//                     required 
//                     min={key === 'age' ? '18' : key === 'weight' ? '45' : undefined} 
//                   />
//                 )}
//               </div>
//             ))}
//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>

//           {/* Display success or error message */}
//           {message && <div className="mt-3 alert alert-info">{message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../images/registrationofblood.webp'; // Add your image path here

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error || 'Registration failed');
//       }
//     } catch (error) {
//       setMessage('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded">
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded" style={{ maxHeight: '400px', width: 'auto' }} />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 d-flex flex-column justify-content-center">
//           <h2 className="mb-4 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {Object.keys(formData).map((key) => (
//               <div className="mb-3" key={key}>
//                 <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                 {key === 'bloodGroup' || key === 'status' ? (
//                   <select name={key} className="form-select" value={formData[key]} onChange={handleChange} required>
//                     {key === 'bloodGroup' && (
//                       <>
//                         <option value="">Select</option>
//                         {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodType => (
//                           <option value={bloodType} key={bloodType}>{bloodType}</option>
//                         ))}
//                       </>
//                     )}
//                     {key === 'status' && (
//                       <>
//                         <option value="Available">Available</option>
//                         <option value="NA">NA</option>
//                       </>
//                     )}
//                   </select>
//                 ) : (
//                   <input 
//                     type={key === 'age' || key === 'weight' ? 'number' : 'text'}
//                     name={key}
//                     className="form-control" 
//                     value={formData[key]} 
//                     onChange={handleChange} 
//                     required 
//                     min={key === 'age' ? '18' : key === 'weight' ? '45' : undefined} 
//                   />
//                 )}
//               </div>
//             ))}
//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>

//           {/* Display success or error message */}
//           {message && <div className="mt-3 alert alert-info">{message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../images//registrationofblood.webp'; // Add your image path here

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/register-donor', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error || 'Registration failed');
//       }
//     } catch (error) {
//       setMessage('Registration failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded">
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 img-container">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded-start" />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 form-container">
//           <h2 className="mb-4 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//             </div>
            
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Contact</label>
//               <input type="text" name="contact" className="form-control" value={formData.contact} onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Age</label>
//               <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} required min="18" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Weight (kg)</label>
//               <input type="number" name="weight" className="form-control" value={formData.weight} onChange={handleChange} required min="45" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Blood Group</label>
//               <select name="bloodGroup" className="form-select" value={formData.bloodGroup} onChange={handleChange} required>
//                 <option value="">Select</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">City</label>
//               <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Status</label>
//               <select name="status" className="form-select" value={formData.status} onChange={handleChange} required>
//                 <option value="Available">Available</option>
//                 <option value="NA">NA</option>
//               </select>
//             </div>

//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>

//           {/* Display success or error message */}
//           {message && <div className="mt-3 alert alert-info">{message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; // Custom styling for the layout and form
// import image from '../registrationofblood.webp'; // Add your image path here

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     age: '',
//     weight: '',
//     bloodGroup: '',
//     city: '',
//     status: 'Available'
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/register-donor', formData);
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response?.data.error || 'Registration failed');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row shadow-lg p-4 rounded">
        
//         {/* Left Side - Image */}
//         <div className="col-md-6 img-container">
//           <img src={image} alt="Donate Blood" className="img-fluid rounded-start" />
//         </div>
        
//         {/* Right Side - Form */}
//         <div className="col-md-6 form-container">
//           <h2 className="mb-4 text-center title">Donor Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
//             </div>
            
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Contact</label>
//               <input type="text" name="contact" className="form-control" value={formData.contact} onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Age</label>
//               <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} required min="18" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Weight (kg)</label>
//               <input type="number" name="weight" className="form-control" value={formData.weight} onChange={handleChange} required min="45" />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Blood Group</label>
//               <select name="bloodGroup" className="form-select" value={formData.bloodGroup} onChange={handleChange} required>
//                 <option value="">Select</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">City</label>
//               <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Status</label>
//               <select name="status" className="form-select" value={formData.status} onChange={handleChange} required>
//                 <option value="Available">Available</option>
//                 <option value="NA">NA</option>
//               </select>
//             </div>

//             <button type="submit" className="btn btn-danger w-100">Register</button>
//           </form>

//           {/* Display success or error message */}
//           {message && <div className="mt-3 alert alert-info">{message}</div>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

