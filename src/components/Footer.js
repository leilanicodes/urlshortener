import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a className="linkedin" href="https://www.linkedin.com/in/eliselbal/">
          <FaLinkedin color={'#c03258'} style={{ fontSize: '3rem' }} />
        </a>
        <a className="github" href="https://github.com/leilanicodes">
          <FaGithubSquare color={'#c03258'} style={{ fontSize: '3rem' }} />
        </a>
        {/* <a className="mail" href="mailto:m11elbal@gmail.com">
          <FaEnvelope color={'red'} style={{ fontSize: '2.5rem' }} />
        </a> */}
      </div>
      <h1
        style={{
          color: '#c03258',
          fontSize: '1rem',
          paddingTop: '1rem',
          margin: '1.5rem',
        }}
      >
        Handcrafted by me &#169; Elise Bal
      </h1>
    </div>
  );
}
