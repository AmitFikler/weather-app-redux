import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DropDown = () => {
  const [country, setCountry] = useState('');
  const cities = useSelector((state) => state.cites);

  const dispatch = useDispatch();
  const getWeather = (country) => {
    return (dispatch) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=72fc7e8580f42b1efd5d67050e86042e`
        )
        .then((response) => {
          const weatherObj = {
            name: response.data.name,
            temp: Math.floor(response.data.main.temp - 273.15),
            main: response.data.weather[0].main,
            icon: response.data.weather[0].icon,
            country: response.data.sys.country,
            feels_like: Math.floor(response.data.main.feels_like - 273.15),
          };
          dispatch({ type: 'FETCH_WEATHER', data: weatherObj });
        })
        .catch((error) => {
          dispatch({
            type: 'FETCH_WEATHER_FAILURE',
            error: error.response.data.message,
          });
        });
    };
  };
  return (
    <div className="search-div">
      <input
        className="input-city"
        type="text"
        list="data"
        onChange={(e) => setCountry(e.target.value)}
      />
      <datalist id="data" style={{ width: '50%' }}>
        {cities.map((item) => (
          <option style={{ width: '50%' }} key={item} value={item} />
        ))}
      </datalist>
      <button
        className="searchBtn material-icons"
        onClick={() => {
          dispatch(getWeather(country));
        }}
      >
        search
      </button>
    </div>
  );
};

export default DropDown;
