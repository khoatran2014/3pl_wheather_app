import { getDisplayDate } from '../functions';

describe('show correct days of the week', () => {
  it('getDisplayDate', () => {
    expect(getDisplayDate('2020-05-03')).toBe('Sunday');
  })
});

