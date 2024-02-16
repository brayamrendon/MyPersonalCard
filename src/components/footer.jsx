import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
      <FontAwesomeIcon icon={faGoogle} size="2x" />
    </div>
  );
}

export default footer;