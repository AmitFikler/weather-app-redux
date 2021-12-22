import { useSelector } from 'react-redux';

const Weather = () => {
  const weather = useSelector((state) => state.response);
  const ifWeather = () => {
    if (weather.name) {
      return (
        <div>
          <div className="weather-div">
            <h3>
              {weather.name}
              {'  '}
              <img
                src={`https://flagcdn.com/28x21/${weather.country.toLowerCase()}.png`}
                alt={weather.country}
              />
            </h3>
            <h1 className="temp">{weather.temp}°C</h1>
            <p>feels like {weather.feels_like}°C</p>
            <img
              alt="weather-icon"
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            />
            <br />
            <i>{weather.main}</i>
          </div>
        </div>
      );
    } else {
      return <h3>Search city</h3>;
    }
  };
  return <div>{ifWeather()}</div>;
};

export default Weather;
