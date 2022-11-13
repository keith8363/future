import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isScreenfull: false,
      userName: "keith",
      id: 7758521,
      token: "",
    };
  },
  persist: {
    key: "user",
    storage: window.sessionStorage,
  },
});
