import axios from 'axios';

export const baseUrl =
  'https://covid.ourworldindata.org/data/owid-covid-data.json';

export const fetchApi = async (url) => {
  const headers = {};

  const { data } = await axios.get(url);

  //   data && console.log('fetchApi', data);

  return data;
};
