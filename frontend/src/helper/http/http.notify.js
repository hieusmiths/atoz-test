export default function (
  {
    isErrorNotify = false,
    isSuccessNotify = false,
    errorMsg = undefined,
    successMsg = undefined,
    errorIcon = undefined,
    successIcon = undefined,
    errorType = undefined,
    successType = undefined,
  },
  response,
) {
  try {
    if (response.status === false) {
      if (isErrorNotify === false) return;
      let msg = null; // cấu hình mặc định tại đây
      let icon = null;
      const type = null;
      console.log(msg, icon, type);
      if (errorMsg !== undefined) {
        msg = errorMsg;
      } else {
        // const CODE = response.code || 'DEFAULT_ERROR_CODE';
        msg = 'Chay ham get text by code o day';
      }
      if (errorIcon !== undefined) {
        icon = errorIcon;
      }
      if (errorType !== undefined) {
        icon = errorType;
      }
      // connectNotifyService({ type, icon, msg });
    } else {
      if (isSuccessNotify === false) return;
      let msg = null; // cấu hình mặc định tại đây
      let icon = null;
      const type = null;
      console.log(msg, icon, type);
      if (successMsg !== undefined) {
        msg = successMsg;
      }
      if (successIcon !== undefined) {
        icon = successIcon;
      }
      if (successType !== undefined) {
        icon = successType;
      }
      // connectNotifyService({ type, icon, msg });
    }
  } catch (error) {
    console.log(error);
  }
}

// const connectNotifyService = function ({ type, icon, msg }) {
//   console.log('Kết nối và chạy thông béo');
// };
