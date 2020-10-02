import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <h1 class="url_header">Solve Your URL Problems Here</h1>
      <form>
        <input
          id="url_shortener"
          name="url"
          placeholder="Paste a url here to shorten it. . ."
        ></input>
        {/* <button class="shorten_button" type="button" className="btn btn-danger">
          SHORTEN
        </button> */}
        <Button variant="danger">SHORTEN</Button>{' '}
      </form>
    </div>
  );
}
