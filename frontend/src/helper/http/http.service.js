import axios from "../axios";
import { HTTP_METHOD } from "./constants";

class Http {
  static getSth(endPoint, config) {
    console.log(config);
    return axios.get(endPoint, config);
  }

  static postSth(endPoint, body, options) {
    return axios.post(endPoint, body, options);
  }

  static putSth(endPoint, body, params, options) {
    return axios.put(endPoint, body, params, options);
  }

  static deleteSth(endPoint, params, options) {
    return axios.delete(endPoint, params, options);
  }
}

export default Http;
