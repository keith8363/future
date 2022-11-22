import { useUserStore } from "@/stores/modules/user";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";
import axios from "axios";

const userStore = useUserStore();
const { token } = storeToRefs(userStore);

axios.defaults.headers.common["Authorization"] = token.value;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const instance = axios.create({
  baseURL: "/",
  timeout: 30000,
  transformResponse: [
    function (data) {
      try {
        // 如果返回的数据是JSON格式，解析处理
        return JSON.parse(data);
      } catch (err) {
        // 如果返回的格式不是JSON格式，正常返回
        return data;
      }
    },
  ],
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    const res = response.data;
    if (res.code === 200) {
      return res;
    } else {
      ElMessage({
        message: res.message,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(new Error(error.message || "Error"));
  }
);

export default instance;
