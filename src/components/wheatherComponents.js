import React from "react";
import { Form, FormControl, Button, Row, Container, Col } from 'react-bootstrap';
import * as Functions from '../functions/functions.js'

export function SearchBox({ cityName, setCityName, doSearch }) {
  return (
    <Row className="justify-content-md-center container-margin">
      <Form inline>
        <FormControl type="text" value={cityName} placeholder="Your city" className="mr-sm-2" onChange={event => setCityName(event.target.value)} />
        <Button variant="outline-success" onClick={() => doSearch(cityName)}>Search</Button>
      </Form>
    </Row>
  );
}

export function ErrorMessages({ isError, incorrectCityName }) {
  return (
    <Row className="justify-content-md-center container-margin">
      {isError && <div>Something went wrong ...</div>}
      {incorrectCityName && <div>Please correct city name</div>}
    </Row>
  );
}

export function WheatherItemList({ data, isLoading }) {
  if (isLoading) {
    return (<Row className="justify-content-md-center container-margin">Loading ...</Row>);
  }
  return (<Row className="justify-content-md-center container-margin">
    {data.consolidated_weather.map((item, index) => {
      if (index < data.consolidated_weather.length - 1) {
        return <WheatherItem key={`wheather_${item.id}`} item={item} />
      } else {
        return ''
      }
    })}
  </Row>);
}

export function WheatherItem({ item }) {
  return (
    <Col className='center'>
      <Container className='card'>
        <Row className='d-flex justify-content-center margin-top-10'>
          {Functions.getDisplayDate(item.applicable_date)}
        </Row>
        <Row className='d-flex justify-content-center margin-top-10'>
          min {parseFloat(item.min_temp).toFixed(2)}
        </Row>
        <Row className="d-flex justify-content-center ">
          max {parseFloat(item.max_temp).toFixed(2)}
        </Row>
      </Container>
    </Col>
  );
}