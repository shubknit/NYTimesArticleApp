import Config from 'react-native-config';

// API Config Details
const apiKey = Config.NYTimes_API_KEY;
const section = 'viewed';
const period = 7;

export const NYTimesAPIDetails = {
  baseURL: 'https://api.nytimes.com/svc/mostpopular/v2/',
  route: `${section}/${period}.json`,
  params: `api-key=${apiKey}`
}
