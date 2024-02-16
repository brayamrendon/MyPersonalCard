import React from 'react';
import Name from '../components/info/Name';
import Buttons from '../components/info/Buttons';
import Foto from './info/brayam.JPG'


const Info = () => {
  return (
    <div className="Info-container">
      <div className="circle-avatar">
        <img src={Foto} alt="brayam.jpg" />
      </div>
      <Name />
      <Buttons />
    </div>
  );
}

export default Info;