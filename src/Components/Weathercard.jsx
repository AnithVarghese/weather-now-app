import useWeather from "../hooks/useWeather";
import Loading from "./Loading";


const WeatherCard = ({ latitude, longitude, city, country }) => {
  const { weather, loading, error } = useWeather(latitude, longitude);

  if (loading) return <Loading />;


  if (!weather) return null;

  return (
    <div className="max-w-sm w-full p-6 bg-none rounded-2xl shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-2 text-center">
        {city}, {country} 🌤️
      </h2>
      <p className="text-sm text-gray-200 text-center mb-4">
        Lat: {latitude}, Lon: {longitude}
      </p>

      <div className="space-y-3">
        <p className="text-lg flex justify-between">
          🌡️ Temperature:{" "}
          <span className="font-semibold">{weather.temp}°C</span>
        </p>
        <p className="text-lg flex justify-between">
          💨 Wind Speed:{" "}
          <span className="font-semibold">{weather.wind} km/h</span>
        </p>
        <p className="text-lg flex justify-between">
          💧 Humidity:{" "}
          <span className="font-semibold">{weather.humidity}%</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
