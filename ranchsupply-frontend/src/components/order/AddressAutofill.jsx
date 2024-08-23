import React, { useState } from 'react';

const AddressAutofill = ({ setAddress }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 2) {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}`
      );
      const data = await response.json();
      setSuggestions(data.features);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.place_name);
    setAddress(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Start typing your address..."
        className="form-control"
      />
      {suggestions.length > 0 && (
        <ul className="list-group">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="list-group-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutofill;
