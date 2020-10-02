import React from 'react';
import { Home, About } from '../components/index';

export default function FullPage(props) {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}
