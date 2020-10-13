import React, { useState, useEffect } from 'react';
import { FaCoffee } from 'react-icons/fa';
import axios from 'axios';

export default function About(props) {
  // gets count on mount when website loads the first time
  useEffect(() => {
    props.updateCount();
  });

  return (
    <div className="about_container">
      <div className="shortener_desc">
        <h1>MAKE YOUR LINKS SHORTER AND JUST AS POWERFUL</h1>
        <p className="shortener_h1">
          Do you ever want to share a url that you feel may be too long or
          overwhelming? Well, guess what? You can shorten your urls to help save
          space! Use the form above to try PERN URL.
        </p>
      </div>
      <div className="perks">
        <div>
          <FaCoffee className="coffee" />
          <h1>Perk One</h1>
          <p className="perk_desc">
            At quis risus sed vulputate. Ornare massa eget egestas purus viverra
            accumsan in nisl nisi. Mattis nunc sed blandit libero volutpat sed
            cras ornare. Ut placerat orci nulla pellentesque dignissim enim sit
            amet venenatis.
          </p>
        </div>
        <div>
          <FaCoffee className="coffee" />
          <h1>Perk Two</h1>
          <p className="perk_desc">
            At quis risus sed vulputate. Ornare massa eget egestas purus viverra
            accumsan in nisl nisi. Mattis nunc sed blandit libero volutpat sed
            cras ornare. Ut placerat orci nulla pellentesque dignissim enim sit
            amet venenatis.
          </p>
        </div>
        <div>
          <FaCoffee className="coffee" />
          <h1>Perk Three</h1>
          <p className="perk_desc">
            At quis risus sed vulputate. Ornare massa eget egestas purus viverra
            accumsan in nisl nisi. Mattis nunc sed blandit libero volutpat sed
            cras ornare. Ut placerat orci nulla pellentesque dignissim enim sit
            amet venenatis.
          </p>
        </div>
      </div>
      <div className="video_container">
        <iframe
          className="video"
          width="575"
          height="350"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/lSX5dPdArZ0"
        ></iframe>
        <div className="count_container">
          <h1 className="count">{props.count}</h1>
          <div>
            <h1 className="count2">URLS SHORTENED BY PERN URL</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
