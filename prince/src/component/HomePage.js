import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [gifs, setGifs] = useState([]);

  // fetching api
  function fetchGifs() {
    fetch('https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8')
      .then(response => response.json()) // Convert response to JSON
      // store response in data
      .then(data => {
        const results = data.results; // Extract results from the response
        const gifUrls = results.map((result) => result.media[0].gif.url); // Extract GIF URLs from the results
        setGifs(gifUrls); // Update the state with the GIF URLs
      })
      .catch(error => {
        console.error('Error fetching GIFs:', error); // Handle any errors that occur during fetching
    });
}

// Call the fetchGifs function when the component mounts
fetchGifs();

return (
    <div id='cont-one'>
      <div></div> {/* Placeholder div */}
      <div id="show-data">
        {gifs.map((gifUrl, index) => (
          <img key={index} src={gifUrl} alt={`GIF ${index}`} /> // The key prop represents a unique identifier for each image.
          ))}
      </div>
      <div></div> {/* Placeholder div */}
      <div id="show-data">
        {gifs.map((gifUrl, index) => (
          <img key={index} src={gifUrl} alt={`GIF ${index}`} />
          ))}
      </div>
      <div></div> {/* Placeholder div */}
      </div>
  );
}

export default HomePage;
    