import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isScreenfull: false,
      describle: "Site of the Day November 9,2022",
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
