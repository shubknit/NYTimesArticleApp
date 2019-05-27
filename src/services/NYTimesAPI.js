import axios from 'axios';
import {NYTimesAPIDetails} from '../constants/apiConfig';

/* Fetching Data From API */

export const getArticlesData = async() => {
  const url = NYTimesAPIDetails.baseURL + NYTimesAPIDetails.route + '?' + NYTimesAPIDetails.params;
  return axios
    .get(url)
    .then(response => {
      return response.data;
    });
}
