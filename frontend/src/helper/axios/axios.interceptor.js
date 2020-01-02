import axios from "axios";
const baseURL = "https://localhost:9002/api/v1";
const token =
  "eyJhbGciOiJIUzI1NiJ9.e30.ZRrHA1JJJW8opsbCGfG_HACGpVUMN_a9IV7pAx_Zmeo";
const axiosInstance = axios.create({
  baseURL: baseURL,
  handlerEnabled: "ok",
  retry: true
});

const requestHandler = function() {};

const isEnabledHandler = function(config = {}) {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

const successHandler = function(response) {
  const isStatus = response.data.status;
  if (isStatus) {
    return response.data.data;
  } else {
    const { config, msgModify } = response;
    if (isEnabledHandler(config)) {
      // chay xu ly thong bao tai day
    }
    return response; // if(response.status !== false) => response chinh la data luon
  }
};

const errorHandler = function(error) {
  console.log(error);
  return false;
};

axiosInstance.interceptors.request.use(
  request => {
    if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    console.log(response.config);
    return successHandler(response);
  },
  error => errorHandler(error)
);

export default axiosInstance;
