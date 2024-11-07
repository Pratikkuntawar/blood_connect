import React, { useState } from 'react';
import './Search.css';

// Utility function to convert text to camel case
const toCamelCase = (text) => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

function Search() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');
  const [donors, setDonors] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const encodedBloodGroup = encodeURIComponent(bloodGroup);
      const camelCaseCity = toCamelCase(city); // Convert city to camel case
      const encodedCity = encodeURIComponent(camelCaseCity);

      const res = await fetch(`https://bloodconnects-8.onrender.com/search?bloodGroup=${encodedBloodGroup}&city=${encodedCity}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        credentials: 'include',
      });

      const data = await res.json();

      if (res.status === 400) {
        window.alert(data.message);
        setDonors([]);
      } else if (res.status === 404) {
        window.alert("No donor found");
        setDonors([]);
      } else if (res.status === 200) {
        setDonors(data);
      } else {
        window.alert("Register yourself and log in before accessing search service. If you have already registered, please log in before accessing search.");
        setDonors([]);
      }
    } catch (error) {
      console.error("Error fetching donors:", error);
      window.alert("Internal server error");
      setDonors([]);
    }
  };

  return (
    <div className="search">
      <div className="search-container">
        <h1>Search for Blood Donors</h1>
        
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="form-input"
            placeholder="Enter blood group (e.g., A+)"
            required
          />

          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-input"
            placeholder="Enter city"
            required
          />

          <button type="submit" className="search-button">Search</button>
        </form>

        {donors.length > 0 && (
          <div className="donor-results">
            <h3>Matching Donors</h3>
            <table className="donor-table">
              <thead>
                <tr>
                  <th className="table-header">Sr. No</th>
                  <th className="table-header">Name</th>
                  <th className="table-header">Contact No</th>
                  <th className="table-header">City</th>
                  <th className="table-header">Blood Group</th>
                  <th className="table-header">Status</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor, index) => (
                  <tr key={donor._id}>
                    <td className="table-data">{index + 1}</td>
                    <td className="table-data">{donor.name}</td>
                    <td className="table-data">{donor.contact}</td>
                    <td className="table-data">{donor.city}</td>
                    <td className="table-data">{donor.bloodGroup}</td>
                    <td className="table-data">{donor.status || "Available"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;



// import React, { useState } from 'react';
// import './Search.css';

// function Search() {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [city, setCity] = useState('');
//   const [donors, setDonors] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const encodedBloodGroup = encodeURIComponent(bloodGroup);
//       const encodedCity = encodeURIComponent(city);

//       const res = await fetch(`/search?bloodGroup=${encodedBloodGroup}&city=${encodedCity}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       const data = await res.json();

//       if (res.status === 400) {
//         window.alert(data.message);
//         setDonors([]);
//       } else if (res.status === 404) {
//         window.alert("No donor found");
//         setDonors([]);
//       } else if (res.status === 200) {
//         setDonors(data);
//       } else {
//         window.alert("Register yourself and logged in yourself before accesing search service.if you have already register yourself as a user then logged in yourself before accesing search service");
//         setDonors([]);
//       }
//     } catch (error) {
//       console.error("Error fetching donors:", error);
//       window.alert("Internal server error");
//       setDonors([]);
//     }
//   };

//   return (
//     <div className='search'>
//     <div className="search-container">
//       <h1>Search for Blood Donors</h1>
      
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           id="bloodGroup"
//           value={bloodGroup}
//           onChange={(e) => setBloodGroup(e.target.value)}
//           className="form-input"
//           placeholder="Enter blood group (e.g., A+)"
//           required
//         />

//         <input
//           type="text"
//           id="city"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="form-input"
//           placeholder="Enter city"
//           required
//         />

//         <button type="submit" className="search-button">Search</button>
//       </form>

//       {donors.length > 0 && (
//         <div className="donor-results">
//           <h3>Matching Donors</h3>
//           <table className="donor-table">
//             <thead>
//               <tr>
//                 <th className='table-header'>Sr. No</th>
//                 <th className='table-header'>Name</th>
//                 <th className='table-header'>Contact No</th>
//                 <th className='table-header'>City</th>
//                 <th className='table-header'>Blood Group</th>
//                 <th className='table-header'>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donors.map((donor, index) => (
//                 <tr key={donor._id}>
//                   <td className='table-data'>{index + 1}</td>
//                   <td className='table-data'>{donor.name}</td>
//                   <td className='table-data'>{donor.contact}</td>
//                   <td className='table-data'>{donor.city}</td>
//                   <td className='table-data'>{donor.bloodGroup}</td>
//                   <td className='table-data'>{donor.status || "Available"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from 'react';
// import './Search.css';

// function Search() {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [city, setCity] = useState('');
//   const [donors, setDonors] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const encodedBloodGroup = encodeURIComponent(bloodGroup);
//       const encodedCity = encodeURIComponent(city);

//       const res = await fetch(`/search?bloodGroup=${encodedBloodGroup}&city=${encodedCity}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       const data = await res.json();

//       if (res.status === 400) {
//         window.alert(data.message);
//         setDonors([]);
//       } else if (res.status === 404) {
//         window.alert("No donor found");
//         setDonors([]);
//       } else if (res.status === 200) {
//         setDonors(data);
//       } else {
//         window.alert("An unexpected error occurred.");
//         setDonors([]);
//       }
//     } catch (error) {
//       console.error("Error fetching donors:", error);
//       window.alert("Internal server error");
//       setDonors([]);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Search for Donors</h2>
      
//       <form onSubmit={handleSearch} className="search-form">
//         <div className="input-group">
//           <label htmlFor="bloodGroup" className="form-label">Blood Group:</label>
//           <input
//             type="text"
//             id="bloodGroup"
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//             className="form-input"
//             placeholder="A+"
//             required
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="city" className="form-label">City:</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="form-input"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         <button type="submit" className="search-button">Search</button>
//       </form>

//       {donors.length > 0 && (
//         <div className="donor-results">
//           <h3>Matching Donors</h3>
//           <table className="donor-table">
//             <thead>
//               <tr>
//                 <th>Sr. No</th>
//                 <th>Name</th>
//                 <th>Contact No</th>
//                 <th>City</th>
//                 <th>Blood Group</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donors.map((donor, index) => (
//                 <tr key={donor._id}>
//                   <td>{index + 1}</td>
//                   <td>{donor.name}</td>
//                   <td>{donor.contact}</td>
//                   <td>{donor.city}</td>
//                   <td>{donor.bloodGroup}</td>
//                   <td>{donor.status || "Available"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from 'react';
// import './Search.css';

// function Search() {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [city, setCity] = useState('');
//   const [donors, setDonors] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const encodedBloodGroup = encodeURIComponent(bloodGroup);
//       const encodedCity = encodeURIComponent(city);

//       const res = await fetch(`/search?bloodGroup=${encodedBloodGroup}&city=${encodedCity}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       const data = await res.json();

//       if (res.status === 400) {
//         window.alert(data.message);
//         setDonors([]);
//       } else if (res.status === 404) {
//         window.alert("No donor found");
//         setDonors([]);
//       } else if (res.status === 200) {
//         setDonors(data);
//       } else {
//         window.alert("An unexpected error occurred.");
//         setDonors([]);
//       }
//     } catch (error) {
//       console.error("Error fetching donors:", error);
//       window.alert("Internal server error");
//       setDonors([]);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Search for Donors</h2>
      
//       <form onSubmit={handleSearch} className="search-form">
//         <div className="input-group">
//           <label htmlFor="bloodGroup" className="form-label">Blood Group:</label>
//           <input
//             type="text"
//             id="bloodGroup"
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//             className="form-input"
//             placeholder="Enter blood group (e.g., A+)"
//             required
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="city" className="form-label">City:</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="form-input"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         <button type="submit" className="search-button">Search</button>
//       </form>

//       {donors.length > 0 && (
//         <div className="donor-results">
//           <h3>Matching Donors</h3>
//           <table className="donor-table">
//             <thead>
//               <tr>
//                 <th>Sr. No</th>
//                 <th>Name</th>
//                 <th>Contact No</th>
//                 <th>City</th>
//                 <th>Blood Group</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donors.map((donor, index) => (
//                 <tr key={donor._id}>
//                   <td>{index + 1}</td>
//                   <td>{donor.name}</td>
//                   <td>{donor.contact}</td>
//                   <td>{donor.city}</td>
//                   <td>{donor.bloodGroup}</td>
//                   <td>{donor.status || "Available"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Search;


// import React, { useState } from 'react';

// function Search() {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [city, setCity] = useState('');
//   const [donors, setDonors] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       // Encode the blood group and city to handle special characters like +
//       const encodedBloodGroup = encodeURIComponent(bloodGroup);
//       const encodedCity = encodeURIComponent(city);

//       const res = await fetch(`/search?bloodGroup=${encodedBloodGroup}&city=${encodedCity}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust token if necessary
//         },
//       });

//       const data = await res.json();

//       if (res.status === 400) {
//         window.alert(data.message); // Alert for missing parameters
//         setDonors([]);
//       } else if (res.status === 404) {
//         window.alert("No donor document found"); // Alert for no donors found
//         setDonors([]);
//       } else if (res.status === 200) {
//         setDonors(data); // Populate donors if they are found
//       } else {
//         window.alert("An unexpected error occurred."); // Generic alert for other errors
//         setDonors([]);
//       }
//     } catch (error) {
//       console.error("Error fetching donors:", error);
//       window.alert("Internal server error"); // Alert for server error
//       setDonors([]);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Search for Donors</h2>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch} className="search-form">
//         <div className="mb-3">
//           <label htmlFor="bloodGroup" className="form-label">Blood Group:</label>
//           <input
//             type="text"
//             id="bloodGroup"
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//             className="form-control"
//             placeholder="Enter blood group (e.g., A+)"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="city" className="form-label">City:</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="form-control"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">Search</button>
//       </form>

//       {/* Display Donor Results */}
//       {donors.length > 0 ? (
//         <div className="donor-results mt-4">
//           <h3>Matching Donors</h3>
//           <table className="table table-bordered table-striped mt-3">
//             <thead>
//               <tr>
//                 <th>Sr. No</th>
//                 <th>Name</th>
//                 <th>Contact No</th>
//                 <th>City</th>
//                 <th>Blood Group</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donors.map((donor, index) => (
//                 <tr key={donor._id}>
//                   <td>{index + 1}</td>
//                   <td>{donor.name}</td>
//                   <td>{donor.contact}</td>
//                   <td>{donor.city}</td>
//                   <td>{donor.bloodGroup}</td>
//                   <td>{donor.status || "Available"}</td> {/* Show status if available, default to "Available" */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         donors.length === 0 && <p>No donors found.</p> // Message for no donors found (optional)
//       )}
//     </div>
//   );
// }

// export default Search;



// import React, { useState } from 'react';

// function Search() {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [city, setCity] = useState('');
//   const [donors, setDonors] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`/search?bloodGroup=${bloodGroup}&city=${city}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust token if necessary
//         },
//       });

//       const data = await res.json();

//       if (res.status === 400) {
//         window.alert(data.message); // Alert for missing parameters
//         setDonors([]);
//       } else if (res.status === 404) {
//         window.alert("No donor document found"); // Alert for no donors found
//         setDonors([]);
//       } else if (res.status === 200) {
//         setDonors(data); // Populate donors if they are found
//       } else {
//         window.alert("An unexpected error occurred."); // Generic alert for other errors
//         setDonors([]);
//       }
//     } catch (error) {
//       console.error("Error fetching donors:", error);
//       window.alert("Internal server error"); // Alert for server error
//       setDonors([]);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Search for Donors</h2>
      
//       {/* Search Form */}
//       <form onSubmit={handleSearch} className="search-form">
//         <div className="mb-3">
//           <label htmlFor="bloodGroup" className="form-label">Blood Group:</label>
//           <input
//             type="text"
//             id="bloodGroup"
//             value={bloodGroup}
//             onChange={(e) => setBloodGroup(e.target.value)}
//             className="form-control"
//             placeholder="Enter blood group (e.g., A+)"
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="city" className="form-label">City:</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="form-control"
//             placeholder="Enter city"
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">Search</button>
//       </form>

//       {/* Display Donor Results */}
//       {donors.length > 0 ? (
//         <div className="donor-results mt-4">
//           <h3>Matching Donors</h3>
//           <table className="table table-bordered table-striped mt-3">
//             <thead>
//               <tr>
//                 <th>Sr. No</th>
//                 <th>Name</th>
//                 <th>Contact No</th>
//                 <th>City</th>
//                 <th>Blood Group</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donors.map((donor, index) => (
//                 <tr key={donor._id}>
//                   <td>{index + 1}</td>
//                   <td>{donor.name}</td>
//                   <td>{donor.contact}</td>
//                   <td>{donor.city}</td>
//                   <td>{donor.bloodGroup}</td>
//                   <td>{donor.status || "Available"}</td> {/* Show status if available, default to "Available" */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         donors.length === 0 && <p>No donors found.</p> // Message for no donors found (optional)
//       )}
//     </div>
//   );
// }

// export default Search;

