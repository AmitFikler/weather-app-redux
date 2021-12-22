const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const initialState = {
  cites: ['Tel Aviv', 'Even Yehuda', 'Eilat', 'Jerusalem', 'Tiberias'],
  response: {},
  error: '',
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      const response = action.data;
      return { cites: state.cites, response, error: '' };
    case FETCH_WEATHER_FAILURE:
      const error = action.error;
      return { ...initialState, error };

    case 'RESET': {
      return { ...initialState };
    }

    default:
      return { ...state };
  }
};
