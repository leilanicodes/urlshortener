import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Home() {
  const [url, setUrl] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setUrl(event.target.value);
  }
  function handleUrl(event) {
    event.preventDefault();
    axios
      .post('/api/new', {
        original_url: url,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <div>
      <h1 class="url_header">Solve Your URL Problems Here</h1>
      <form onSubmit={handleUrl}>
        <input
          id="url_shortener"
          value={url}
          type="url"
          name="url"
          pattern="https://.*"
          placeholder="Paste a url here to shorten it. . ."
          required
          onChange={handleChange}
        ></input>
        {/* <button class="shorten_button" type="button" className="btn btn-danger">
        </button> */}
        <Button type="submit" variant="danger">
          SHORTEN
        </Button>
      </form>
    </div>
  );
}
