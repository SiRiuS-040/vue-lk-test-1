import { defineStore } from "pinia";
import { staffList } from "@/repository/employee/mock.ts";

interface IStore {
  isAuthorized: boolean;
  userName: string;
  userPassword: string;
  userLogin: string;
  id: number;
  email: string;
  phone: string;
  credits: number;
  tokens: number;
}

interface IAuth {
  login: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): IStore => ({
    isAuthorized: false,
    userPassword: "",
    userLogin: "",
    id: 1,
    userName: "",
    email: "",
    phone: "",
    credits: 0,
    tokens: 0,
  }),
  getters: {},
  actions: {
    async authirize(data: IAuth) {
      console.log("имитация authorize");

      if (
        staffList.find((item) => item.email === data.login) &&
        staffList.find((item) => item.email === data.login)?.password !==
          data.password
      ) {
        console.log("имитация - нет такого пользователя или не верный пароль");
        throw new Error("Incorrect Email address or Password");
      }
      console.log("имитация - Пароль верный");

      const isExist = staffList.find((item) => item.email === data.login);
      if (isExist) {
        this.isAuthorized = true;
        this.userName = isExist.userName;
        this.userPassword = isExist.password;
        this.userLogin = data.login;
        this.credits = isExist.credits;
        this.tokens = isExist.tokens;
      }
    },
    logout() {
      this.isAuthorized = false;
      this.userName = "";
      this.userLogin = "";
      this.userPassword = "";
    },
  },
});
