import React, { useState } from 'react';

function GifSearch({ onSubmitQuery }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitQuery(searchTerm); // Invoke the callback with the search term
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for GIFs:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
