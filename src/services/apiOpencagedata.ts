import axios from 'axios';

export const apiOpencagedata = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1/',
});
