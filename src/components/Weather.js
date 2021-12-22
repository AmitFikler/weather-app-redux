import { useSelector } from 'react-redux';

const Weather = () => {
  const weather = useSelector((state) => state.response);
  const ifWeather = () => {
    if (weather.name) {
      return (
        <div>
          <h1>
            {weather.name}
            {'  '}
            <img
              src={`https://flagcdn.com/28x21/${weather.country.toLowerCase()}.png`}
              alt={weather.country}
            />
          </h1>
          <h3>{weather.temp}°C</h3>
          <p>feels like {weather.feels_like}°C</p>
          <p>{weather.date}</p>
          <img
            alt="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          />
          <br />
          <i>{weather.main}</i>
        </div>
      );
    } else {
      return <h3>Search city</h3>;
    }
  };
  return <div>{ifWeather()}</div>;
};

export default Weather;
