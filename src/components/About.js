import React from 'react';
import ImageFace from '../img/face.png';

class About extends React.Component {
  render() {
    return (
      <div className='About'>
        <img src={ImageFace} style={{ opacity: 0.8 }} alt=''/>
      </div>
    );
  }
}

export default About;