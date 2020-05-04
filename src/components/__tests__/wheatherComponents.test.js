import { shallow } from 'enzyme';
import React from 'react';
import { SearchBox, ErrorMessages, WheatherItemList, WheatherItem } from '../wheatherComponents';

const mockData = {
  consolidated_weather: [
    {
      id: 6723252263059456,
      applicable_date: "2020-05-03",
      max_temp: 14.754999999999999,
      min_temp: 9.05
    },
    {
      id: 6667220119715840,
      applicable_date: "2020-05-04",
      max_temp: 18.34,
      min_temp: 9.260000000000002
    },
    {
      id: 5653921102036992,
      applicable_date: "2020-05-05",
      max_temp: 15.555,
      min_temp: 8.235
    },
    {
      id: 6236987809857536,
      applicable_date: "2020-05-06",
      max_temp: 17.54,
      min_temp: 7.525
    },
    {
      id: 5321257295806464,
      applicable_date: "2020-05-07",
      max_temp: 20.884999999999998,
      min_temp: 7.45
    },
    {
      id: 5321257295806464,
      applicable_date: "2020-05-07",
      max_temp: 20.884999999999998,
      min_temp: 7.45
    }
  ]
}

describe('render wheather components', () => {
  it('render search box', () => {
    const mockSetCity = () => { };
    const mockSetQuery = () => { };
    const wrapper = shallow(<SearchBox cityName='london' setCityName={mockSetCity} doSearch={mockSetQuery} />);
    expect(wrapper.find('Button')).toHaveLength(1);
  })

  it('show error message', () => {
    const wrapper = shallow(<ErrorMessages isError={true} />);
    expect(wrapper.find('div').text().includes('Something went wrong ...')).toBe(true);
  })

  it('not show error messsage', () => {
    const wrapper = shallow(<ErrorMessages isError={false} />);
    expect(wrapper.find('div')).toHaveLength(0);
  })

  it('show wrong city name', () => {
    const wrapper = shallow(<ErrorMessages incorrectCityName={true} />);
    expect(wrapper.find('div').text().includes('Please correct city name')).toBe(true);
  })

  it('show wheather list', () => {
    const wrapper = shallow(<WheatherItemList data={mockData} isLoading={false} />);
    expect(wrapper.find('WheatherItem')).toHaveLength(5);
  })

  it('show wheather item', () => {
    const wrapper = shallow(<WheatherItem item={mockData.consolidated_weather[0]} />);
    expect(wrapper.text().includes('Sunday')).toBe(true);
  })
});