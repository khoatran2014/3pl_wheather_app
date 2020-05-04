import moment from 'moment/moment.js';

export const getDisplayDate = (date) => {
  const day = moment(date).format('dddd');
  return day;
}
