import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import bloodImage from '../images/blood-image.jpg'; // Ensure you have a blood image named "blood-image.png" in the same directory or update the path

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={bloodImage} alt="Donate Blood" className="blood-image" />
        <h1 className="home-title">Donate Blood, Save Life!</h1>
        <p className="home-subtitle">Your Blood Can Bring a Smile to Another Person’s Life</p>

        <div className="button-container">
          <button
            className="donate-button"
            onClick={() => navigate('/register')}
          >
            Register to Donate Blood
          </button>
          <button
            className="search-button"
            onClick={() => navigate('/user')}
          >
            Register & Search for Donors
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <h1 className="home-title">Donate Blood, Save Life!</h1>
//         <p className="home-subtitle">Your Blood Can Bring  Smile In Another Person’s Life</p>

//         <div className="button-container">
//           <button
//             className="donate-button"
//             onClick={() => navigate('/register')}
//           >
//             Register to Donate Blood
//           </button>
//           <button
//             className="search-button"
//             onClick={() => navigate('/user')}
//           >
//             Register & Search for Donors
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
