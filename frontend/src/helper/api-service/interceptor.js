import axios from 'axios';

const baseURL = 'https://localhost:9002/api/v1';
const token = 'eyJhbGciOiJIUzI1NiJ9.e30.ZRrHA1JJJW8opsbCGfG_HACGpVUMN_a9IV7pAx_Zmeo';
const axiosInstance = axios.create({
  baseURL,
});

const successHandler = (response) => {
  const isStatus = response.data.status;
  if (isStatus) {
    return response.data.data;
  }
  return response;
};

const errorHandler = (error) => {
  console.log(error);
  return false;
};

axiosInstance.interceptors.request.use(
  (request) => {
    if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    console.log(error);
    return false;
  },
);

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);

export default axiosInstance;
