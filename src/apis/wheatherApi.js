import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';
import { DataFetchReducer } from '../reducers/wheatherReducer.js'
import * as Constants from '../constants/urlConstant.js'

const fetchData = async (query, dispatch) => {
  if (query !== '') {
    dispatch({ type: 'FETCH_WHEATHER_INIT' });
    try {
      const cityInfo = await axios(`${Constants.citySearchingUrl}${query}`);
      if (cityInfo.data.length > 1) {
        dispatch({ type: 'FETCH_WHEATHER_INCORRECT_CITY_NAME', payload: { consolidated_weather: [] } });
      } else {
        const result = await axios(
          `${Constants.wheatherUrl}${cityInfo.data[0].woeid}/`);
        dispatch({ type: 'FETCH_WHEATHER_SUCCESS', payload: result.data });
      }
    } catch {
      dispatch({ type: 'FETCH_WHEATHER_FAILURE' });
    }
  }
};

export const WheatherApi = () => {
  const [query, setQuery] = useState('');
  const [state, dispatch] = useReducer(DataFetchReducer, {
    isLoading: false,
    isError: false,
    incorrectCityName: false,
    data: { consolidated_weather: [] },
  });

  useEffect(() => {
    fetchData(query, dispatch);
  }, [query]);

  return [state, setQuery];
};