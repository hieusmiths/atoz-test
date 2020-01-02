import apiService from "../api-service";
import httpNotify from "./http.notify";
// interface options {
//   isErrorNotify = false,
//     isSuccessNotify = false,
//     errorMsg = undefined,
//     successMsg = undefined,
//     errorIcon = undefined,
//     successIcon = undefined,
//     errorType = undefined,
//     successType = undefined
// }

class Http {
  static async getSth(endPoint, params, options) {
    const response = await apiService.get(endPoint, params);
    httpNotify(options, response);
    return response;
  }

  static async postSth(endPoint, body, options) {
    const response = await apiService.post(endPoint, body, options);
    httpNotify(options, response);
    return response;
  }

  static async putSth(endPoint, body, params, options) {
    const response = await apiService.put(endPoint, body, params, options);
    httpNotify(options, response);
    return response;
  }

  static async deleteSth(endPoint, params, options) {
    const response = await apiService.delete(endPoint, params, options);
    httpNotify(options, response);
    return response;
  }
}

export default Http;
