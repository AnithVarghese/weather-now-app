import React, { useState } from "react";

const Searchcomponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
      onSearch(query.trim());
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-lg mx-auto mt-6 shadow-lg rounded-xl overflow-hidden bg-white"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city or location..."
        className="flex-1 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition rounded-b-full"
      >
        Search
      </button>
    </form>
  );
};

export default Searchcomponent;
