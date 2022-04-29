import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';

function About() {
  return (
    <div className="about container">
      <div className="row">
        <div className="col-md-6">
          <div className="card text-dark mb-3 shadow-sm">
            <h5 className="card-header bg-light bg-gradient">Programming languages</h5>
            <div className="card-body">
              <p className="card-text">JavaScript</p>
              <p className="card-text">Python</p>
              <p className="card-text">C</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-dark mb-3 shadow-sm">
            <h5 className="card-header bg-light bg-gradient">Languages</h5>
            <div className="card-body">
              <p className="card-text">English</p>
              <p className="card-text">Persian</p>
              <p className="card-text">Spanish</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card text-dark mb-3 shadow-sm">
            <h5 className="card-header bg-light bg-gradient">Education</h5>
            <div className="card-body">
              <p className="card-text">Bachelor&apos;s degree in Spanish philology</p>
              <p className="card-text">Master&apos;s degree in clinical psychology</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-dark mb-3 shadow-sm">
            <h5 className="card-header bg-light bg-gradient">Hobbies</h5>
            <div className="card-body">
              <p className="card-text">Programming</p>
              <p className="card-text">Reading</p>
              <p className="card-text">Swimming</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
