import React, { useState } from 'react';
import './DonorUpdate.css';

const DonorUpdate = () => {
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    contact: '',
    status: 'Available'  // Default to 'Available'
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    // Convert city name to camel case
    const updatedFormData = {
      ...formData,
      city: toCamelCase(formData.city)
    };

    console.log('Sending data:', updatedFormData);  // Check data before sending
    try {
      const response = await fetch('https://bloodconnects-8.onrender.com/update-donor', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFormData)
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage('Error updating profile.');
    }
  };

  return (
    <div className="donor-update-container">
      <h2>Update Donor Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
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

        <button type="submit">Update Profile</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default DonorUpdate;


// import React, { useState } from 'react';
// import './DonorUpdate.css';

// const DonorUpdate = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     city: '',
//     contact: '',
//     status: 'Available'  // Default to 'Available'
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(''); // Clear previous messages
//     console.log('Sending data:', formData);  // Check data before sending
//     try {
//       const response = await fetch('/update-donor', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error);
//       }
//     } catch (error) {
//       setMessage('Error updating profile.');
//     }
//   };

//   return (
//     <div className="donor-update-container">
//       <h2>Update Donor Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>City</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//         />

//         <label>Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
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

//         <button type="submit">Update Profile</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default DonorUpdate;


// import React, { useState } from 'react';
// import './DonorUpdate.css';

// const DonorUpdate = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     city: '',
//     contact: '',
//     status: 'Available'  // Default to 'Available'
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(''); // Clear previous messages
//     console.log('Sending data:', formData);  // Check data before sending
//     try {
//       const response = await fetch('/update-donor', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error);
//       }
//     } catch (error) {
//       setMessage('Error updating profile.');
//     }
//   };

//   return (
//     <div className="donor-update-container">
//       <h2>Update Donor Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>City</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//         />

//         <label>Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
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

//         <button type="submit">Update Profile</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default DonorUpdate;


// import React, { useState } from 'react';
// import './DonorUpdate.css';

// const DonorUpdate = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     city: '',
//     contact: '',
//     status: ''
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(''); // Clear previous messages
//     try {
//       const response = await fetch('/update-donor', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage(data.message);
//       } else {
//         setMessage(data.error);
//       }
//     } catch (error) {
//       setMessage('Error updating profile.');
//     }
//   };

//   return (
//     <div className="donor-update-container">
//       <h2>Update Donor Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>City</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//         />

//         <label>Contact</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//         />

//         <label>Status</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//         >
//           <option value="Available">Available</option>
//           <option value="Not Available">NA</option>
//         </select>

//         <button type="submit">Update Profile</button>
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default DonorUpdate;
