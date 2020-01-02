export default function({ isNotify = false, msg = "" }, response) {
  if (isNotify === false) return;
  connectNotifyService();
}

const connectNotifyService = function() {
  console.log("Kết nối và chạy thông béo");
};
