import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function About(props) {
  useEffect(() => {
    props.updateCount();
  });

  return (
    <div className="about_container">
      <div className="count">
        <h1>{props.count} URLS SHORTENED BY PERN URL</h1>
      </div>
    </div>
  );
}
