import axios from 'axios';
import {getArticlesData} from '../NYTimesAPI';

/* Mock Response */

const successResponse = {
  status: "success",
  results: {
    title: 'NYTimes Article'
  }
}

/* Failure Response */

const failureResponse = {
  status: "failure",
  error: 'error in fetching'
}

/* Test for Fetch data from API  successfully*/

it('check if getArticlesData get success response ', async() => {
  const spy = jest.spyOn(axios, 'get');
  spy.mockImplementation(() => Promise.resolve({data: successResponse}))
  const response = await getArticlesData();
  expect(response).toBe(successResponse);
  spy.mockRestore();
});

/* Test for Fetch data from API got an error*/

it('check if getArticlesData get failure response ', async() => {
  const spy = jest.spyOn(axios, 'get');
  spy.mockImplementation(() => Promise.resolve({data: failureResponse}))
  const response = await getArticlesData();
  expect(response).toBe(failureResponse);
  spy.mockRestore();
});