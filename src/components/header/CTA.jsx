import React from 'react';
// import CV from '../../assets/resume of Suyel Haque.pdf';
import cv from '../../assets/Resume of Shazid_karim..pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
