export const DataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WHEATHER_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
        incorrectCityName: false,
      };
    case 'FETCH_WHEATHER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        incorrectCityName: false,
        data: action.payload,
      };
    case 'FETCH_WHEATHER_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        incorrectCityName: false,
      };
    case 'FETCH_WHEATHER_INCORRECT_CITY_NAME':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
        incorrectCityName: true,
      };
    default:
      throw new Error();
  }
};