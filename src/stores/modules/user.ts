import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userName: "keith",
      id: 7758521,
      token: "123456678",
    };
  },
  persist: {
    key: "user",
    storage: window.sessionStorage,
  },
});
