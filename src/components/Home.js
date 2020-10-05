import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Home() {
  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setUrl(event.target.value);
  }
  async function handleUrl(event) {
    event.preventDefault();
    await axios
      .post('http://localhost:3000/api/new', {
        original_url: url,
      })
      .then(
        (response) => {
          console.log(response);
          setNewUrl(
            `https://www.pernurl.herokuapp.com/${response.data.short_url}`
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }
  return (
    <div className="url_container">
      <h1 className="url_header">Solve Your URL Problems Here</h1>
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
      <div>{newUrl && <h2 className="newUrl">{newUrl}</h2>}</div>
    </div>
  );
}
