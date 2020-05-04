import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import { SearchBox, ErrorMessages, WheatherItemList } from './components/wheatherComponents';
import { WheatherApi } from './apis/wheatherApi.js';

function App() {
  const [cityName, setCityName] = useState('');
  const [{ data, isLoading, isError, incorrectCityName }, doSearch] = WheatherApi();

  return (
    <Container fluid>
      <SearchBox cityName={cityName} setCityName={setCityName} doSearch={doSearch} ></SearchBox>
      <ErrorMessages isError={isError} incorrectCityName={incorrectCityName} />
      <WheatherItemList data={data} isLoading={isLoading} />
    </Container>
  );
}

export default App;




