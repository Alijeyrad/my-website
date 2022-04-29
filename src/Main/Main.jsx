import React from 'react';
import { Link } from 'react-router-dom';
import SimpleSlider from '../Slider/SimpleSlider';
import './Main.css';

function Main() {
  return (
    <div className="container bg-light bg-gradient shadow-sm text-dark mb-4">
      <div className="row">
        <div className="info d-flex text-center flex-column align-items-center p-3 col-md-6">
          <h1>Hi, I&apos;m Ali</h1>
          <h2 className="link-dark">I&apos;m a React developer</h2>
          <h4>
            You can read more about me
            {' '}
            <Link className="link-dark" to="/about">here</Link>
          </h4>
          <h6 className="m-4 link-dark">
            Feel like talking?
            {' '}
            <Link className="link-dark" to="/contact">send a message</Link>
          </h6>
        </div>
        <div className="col-md-6 p-4">
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}

export default Main;
