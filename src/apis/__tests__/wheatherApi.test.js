import axios from 'axios';
import * as Constants from '../../constants/urlConstant';
import 'babel-polyfill'

describe('#getUser() using async/await', () => {
  it('should load wheather', async () => {
    const cityInfo = await axios(`${Constants.citySearchingUrl}london`);
    const result = await axios(`${Constants.wheatherUrl}${cityInfo.data[0].woeid}/`);
    expect(result).toBeDefined()
    expect(result.data.consolidated_weather.length).toBe(6);
  }, 30000);
})