// useWeather.js
//custom hook to fetch weather data based on latitude and longitude
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";  // url to fetch weather data

const useWeather = (latitude, longitude, options = {}) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (latitude == null || longitude == null) return;
  
    // Fetch weather data
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {
          latitude,
          longitude,
          current: "temperature_2m,wind_speed_10m",
          hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m",
          ...options,
        };
        
         
        const response = await axios.get(BASE_URL, { params });
        const data = response.data;

        // Extract useful values
        const formatted = {
          temp: data?.current?.temperature_2m,
          wind: data?.current?.wind_speed_10m,
          humidity: data?.hourly?.relative_humidity_2m?.[0],
          raw: data,
        };

        setWeather(formatted);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude, JSON.stringify(options)]);

  return { weather, loading, error };
};

export default useWeather;
