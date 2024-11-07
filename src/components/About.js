import React from 'react';
import bloodImage from '../images/aboutlogoofblooddonation.webp'; // Replace with your stroke image
import './About.css'; // Make sure this path is correct

function About() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {/* Left Column: Brain Stroke Definition */}
        <div className='col-lg-6 text-container'>
          <h2 className="heading">BloodConnect – Emergency Blood Requests and Donor Finder</h2>
          <p className="definition">
     
          "Emergency Blood Requests and Donor Finder" is a platform dedicated to bridging the gap between those in urgent need of blood and the heroes willing to donate. In critical situations where every second counts, this service enables hospitals, patients, and their families to quickly locate available donors based on blood type and proximity. By streamlining the process and connecting donors directly with those in need, the platform ensures faster response times, helping save lives when it matters most. Through this initiative, we aim to foster a community of donors and empower people to come together in moments of crisis, making blood readily accessible to all who need it.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className='col-lg-6 image-container d-flex justify-content-center'>
          <img 
            src={bloodImage} 
            alt='about image of blood donation' 
            className='img-fluid rounded'
          />
        </div>
      </div>
      <h2 id="h2">Our vision and mission</h2>
     
     <div className='row'>
       <div className='col-lg-6 mb-4 car'>
         <div className="card">
           <div className="card-body">
             <h2 className="card-title"> Vision</h2>
             <p className="card-text">
             To create a connected community where blood donation is accessible, timely, and seamlessly available, ensuring that no life is at risk due to the lack of compatible blood during emergencies. We envision a world where every individual in need of blood can quickly connect with willing donors, fostering a compassionate network that supports one another in times of critical need
             </p>
           </div>
         </div>
       </div>

       <div className='col-lg-6 mb-4'>
         <div className="card ">
           <div className="card-body ">
             <h2 className="card-title ">Mission</h2>
             <p className="card-text ">
             To bridge the gap between blood donors and recipients through an efficient platform that empowers individuals and healthcare providers to locate compatible donors swiftly. By fostering a responsive community, we aim to improve response times, ensuring lifesaving blood is  available during critical moments, and strengthening the support network for those in urgent need.
             </p>
           </div>
         </div>
       </div>
     </div>

     <h2 className=" symptoms text-center mb-4">Benefits Of Blood Danation</h2>
      <div className='row'>
        {/* Row 1: Symptoms 1, 2, and 3 */}
        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Saves Lives</h5>
              <p className="card-text t2">
              Blood donation is a vital act that can save the lives of those suffering from severe injuries, surgeries, and medical conditions. Every donation can help save up to three lives.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Health Benefits</h5>
              <p className="card-text 2">
              Donating blood can help improve your health by reducing the risk of heart disease and certain cancers. Regular donation can also promote  new blood cells.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Community Support</h5>
              <p className="card-text t2">
              Blood donation fosters a sense of community and encourages others to contribute. It creates a culture of helping and supports those in critical need within your community.

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        {/* Row 2: Symptoms 4, 5, and 6 */}
        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Free Health Checkup</h5>
              <p className="card-text t2">
              Blood donors receive a free health checkup, including blood pressure, hemoglobin levels, and more. This can help you stay informed about your health status.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b1">
              <h5 className="card-title t1">Reduces Iron Overload</h5>
              <p className="card-text t2">
              Regular blood donation can help reduce iron overload in the body, lowering the risk of health issues associated with excess iron, such as liver disease and heart problems.
              </p>
            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4'>
          <div className="card d">
            <div className="card-body b">
              <h5 className="card-title t1">Encourages Healthy Living</h5>
              <p className="card-text t2">
              Blood donors are often encouraged to maintain a healthy lifestyle, including regular checkups, good nutrition, and exercise, which promotes overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>


      </div>
  );
}
export default About;
