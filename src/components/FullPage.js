import React, { useState } from 'react';
import { Home, About, Footer } from '../components/index';
import axios from 'axios';

export default function FullPage() {
  const [count, setCount] = useState(0);

  // sets homepage based on whether you're on localhost or heroku
  const homepage =
    document.domain === 'localhost'
      ? 'http://localhost:3000/api'
      : 'https://pernurl.herokuapp.com/api';

  // gets and sets count to number of urls
  async function updateCount() {
    const count = await axios.get(`${homepage}/count`);

    setCount(count.data);
  }

  return (
    <div>
      <div id="home">
        <Home homepage={homepage} updateCount={updateCount} />
      </div>
      <div id="about">
        <About homepage={homepage} updateCount={updateCount} count={count} />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
