import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

function Layout(props) {
  const { children } = props;
  const { pathname } = useLocation();
  let pageName;
  let info;
  switch (pathname) {
    case '/':
      pageName = '';
      info = '';
      break;
    case '/about':
      pageName = 'About';
      info = "Here you'll find some information about me";
      break;
    case '/contact':
      pageName = 'Contact';
      info = 'You can send me massages here';
      break;
    default:
      pageName = '';
      info = '';
      break;
  }

  return (
    <div>
      <Header
        pageName={pageName}
        info={info}
      />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
