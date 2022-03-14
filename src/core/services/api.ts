import axios from "axios";

const baseUrl = 'https://run.mocky.io/v3';

export const apiRequest = axios.create({
  baseURL: baseUrl,
});
