/* This code snippet is importing the Axios library and creating an instance of Axios using
`axios.create()`. The `axiosService` constant is assigned the created Axios instance with a
specified `baseURL` taken from the `NEXT_PUBLIC_API_URL` environment variable. This instance can be
used to make HTTP requests to the API with the specified base URL. */
import axios from 'axios';

export const axiosService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});
