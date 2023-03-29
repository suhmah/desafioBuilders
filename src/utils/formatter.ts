import moment from 'moment';

moment.locale('pt-br');

const formatDate = (date: string | Date) => {
  return moment(date).format('DD/MM/YY');
};
const formatDateHour = (date: string | Date) => {
  return moment(date).utc().format('HH:mm');
};

export default {
  formatDate,
  formatDateHour,
};
