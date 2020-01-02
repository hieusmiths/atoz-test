import apiService from "../api-service";
import httpNotify from "./http.notify";
// interface config = {
//   msg:
//   isNotify: true
// }

class Http {
  static async getSth(endPoint, config) {
    const response = await apiService.get(endPoint, config);
    httpNotify(config, response);
    return response;
  }

  static postSth(endPoint, body, options) {
    return apiService.post(endPoint, body, options);
  }

  static putSth(endPoint, body, params, options) {
    return apiService.put(endPoint, body, params, options);
  }

  static deleteSth(endPoint, params, options) {
    return apiService.delete(endPoint, params, options);
  }
}

export default Http;
