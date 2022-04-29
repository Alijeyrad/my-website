import React, { useRef, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/my-website':
        mainRef?.current?.classList.add('active');
        aboutRef?.current?.classList.remove('active');
        contactRef?.current?.classList.remove('active');
        break;
      case '/about':
        mainRef?.current?.classList.remove('active');
        aboutRef?.current?.classList.add('active');
        contactRef?.current?.classList.remove('active');
        break;
      case '/contact':
        mainRef?.current?.classList.remove('active');
        aboutRef?.current?.classList.remove('active');
        contactRef?.current?.classList.add('active');
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <ul className="navbar bg-secondary bg-gradient nav d-flex flex-row justify-content-evenly p-3 mb-3">
      <Link to="/my-website">
        <li ref={mainRef} className="nav-item me-4">
          <button className="navbtn border-0 bg-secondary text-light" type="button">
            <h5 className="m-0">Main</h5>
          </button>
        </li>
      </Link>
      <Link to="/about">
        <li ref={aboutRef} className="nav-item me-4">
          <button className="navbtn border-0 bg-secondary text-light" type="button">
            <h5 className="m-0">About</h5>
          </button>
        </li>
      </Link>
      <Link to="/contact">
        <li ref={contactRef} className="nav-item me-4">
          <button className="navbtn border-0 bg-secondary text-light" type="button">
            <h5 className="m-0">Contact</h5>
          </button>
        </li>
      </Link>
    </ul>
  );
}

export default Navbar;
