import React, { useState } from 'react';
import axios from 'axios';

export const SearchInput = ({ query, setQuery, handleSearch }) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search..."
        />
    );
};

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/search?q=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    return (
        <div>
            <SearchInput query={query} setQuery={setQuery} handleSearch={handleSearch} />
            <ul>
                {results.map((item) => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;