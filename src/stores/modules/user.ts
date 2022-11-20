import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isScreenfull: false, // 是否全屏
      describle: "Site of the Day November 9,2022", // 首页描述
      userName: "keith", // 用户名
      id: 7758521,
      token: "",
      collectList: ["Three"],
    };
  },
  persist: {
    key: "user",
    storage: window.sessionStorage,
  },
});
