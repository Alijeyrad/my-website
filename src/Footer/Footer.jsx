import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { SiCodewars } from 'react-icons/si';

function Footer() {
  return (
    <div className="position-relative ps-3 pb-2 pt-1 border-top d-flex flex-row justify-content-start w-100">
      <div className="opacity-75 me-2 text-center">
        Developed by Ali using React
      </div>
      <a href="https://github.com/Alijeyrad/" target="_blank" rel="noreferrer">
        <BsGithub
          style={{
            position: 'absolute',
            bottom: '11px',
            left: '235px',
            marginright: '20px',
          }}
          className="link-dark"
        />
      </a>
      <a href="https://www.instagram.com/ali_julaee/" target="_blank" rel="noreferrer">
        <BsInstagram
          style={{
            position: 'absolute',
            bottom: '11px',
            left: '260px',
            marginright: '20px',
          }}
          className="link-dark"
        />
      </a>
      <a href="https://www.linkedin.com/in/ali-julaee-rad-7bb45117a/" target="_blank" rel="noreferrer">
        <BsLinkedin
          style={{
            position: 'absolute',
            bottom: '11px',
            left: '285',
            marginright: '20px',
          }}
          className="link-dark"
        />
      </a>
      <a href="https://www.codewars.com/users/Alijeyrad" target="_blank" rel="noreferrer">
        <SiCodewars
          style={{
            position: 'absolute',
            bottom: '11px',
            left: '310',
            marginright: '20px',
          }}
          className="link-dark"
        />
      </a>
    </div>
  );
}

export default Footer;
