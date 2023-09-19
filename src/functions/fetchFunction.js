export const ApiCall = ({ isForecast, stateToChange }) => {
  const WEATHER_API = 'https://api.openweathermap.org/';
  const WEATHER_API_KEY = '89428bf87e63fd4d8d642ac1cb2311a3';
  const [coords, setCoords] = useState({ lat: null, lon: null });

  const WEATHER_URL = `${WEATHER_API}data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;
  const FORECAST_URL = `${WEATHER_API}data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric&lang=sp`;

  const URL = !isForecast ? WEATHER_URL : FORECAST_URL;

  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta sobre el clima de tu ciudad no es válida');
      }
      return response.json();
    })
    .then((data) => {
      stateToChange(data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
};
