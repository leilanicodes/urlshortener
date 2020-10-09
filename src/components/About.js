import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function About(props) {
  // gets count on mount when website loads the first time
  useEffect(() => {
    props.updateCount();
  });

  return (
    // <div>
    //   <iframe
    //     className="video"
    //     // width="600"
    //     // height="400"
    //     frameBorder="0"
    //     allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //     src="https://www.youtube.com/embed/SbKpt9c4DdQ"
    //   ></iframe>
    <div className="count_container">
      <h1>{props.count} URLS SHORTENED BY PERN URL</h1>
    </div>
    // </div>
  );
}
