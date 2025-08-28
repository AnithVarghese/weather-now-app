// Homepage.jsx

import { useState } from "react";
import Searchcomponent from "../Components/Searchcomponent";
import WeatherCard from "../Components/Weathercard";
import errorImg from "../assets/errimg.png";

const HomePage = () => {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setError(null);
    
    if (!query || query  === "") {
       setError("No city Entered❌ Please Enter a city!");
         setCoords(null);
         return;
       }
    else{
     try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}` //fetch coordinates based on city name
      );
      const data = await res.json();
      // check if results exist
      if (data && data.results && data.results.length > 0) {
        const { latitude, longitude, name, country } = data.results[0];
        setCoords({ latitude, longitude, name, country });
      } else {
        setError("City not found ❌");
        setCoords(null);
      }
    } catch (err) {
      setError("Failed to fetch location");
      setCoords(null);
    }
  }

  
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
        🌍 Weather Now
      </h1>

      {/* Search box */}
      <Searchcomponent onSearch={handleSearch} />

      {/* Error */}
      {error && (
        
        
        <div className="max-w-sm w-full p-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg text-center">
          <img
            src={errorImg}
            alt="Error"
            className="w-28 h-28 mx-auto mb-4 object-contain rounded-xl"
          />
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      )}

      {/* Weather card */}
      {coords && (
        <WeatherCard
          latitude={coords.latitude}
          longitude={coords.longitude}
          city={coords.name}
          country={coords.country}
          
        />
      )}
    </div>
  );
};

export default HomePage;
