import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Home(props) {
  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setUrl(event.target.value);
  }
  async function handleUrl(event) {
    event.preventDefault();
    await axios
      .post(`${props.homepage}/new`, {
        original_url: url,
      })
      .then(
        (response) => {
          //   console.log('homepage:', props.homepage);
          //   console.log('response:', response);
          {
            setNewUrl(`${props.homepage}/${response.data.short_url}`);
            props.updateCount();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function copyUrlToClipboard() {
    const el = document.getElementById('copiedUrl');
    el.select();
    document.execCommand('copy');
    el.setSelectionRange(0, 0);
    el.blur();
    alert('Copied url to clipboard!');
  }

  function clear() {
    setUrl('');
    setNewUrl('');
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

        <Button type="submit" variant="danger">
          SHORTEN
        </Button>
      </form>
      <div className="newUrl_container">
        <div>
          {newUrl && (
            <textarea
              id="copiedUrl"
              className="newUrl"
              value={newUrl}
              onClick={copyUrlToClipboard}
              readOnly
            />
          )}
        </div>
        <div>
          {newUrl && (
            <Button id="clear" variant="secondary" onClick={clear}>
              RESET
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
