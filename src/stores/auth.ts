import { defineStore } from "pinia";
import { UserSStatus } from "@/repository/employee/types.ts";
import { staffList } from "@/repository/employee/mock.ts";

interface IStore {
  isAuthorized: boolean;
  id: number;
  userName: string;
  email: string;
  phone: string;
  credits: number;
  tokens: number;
  avatar: string;
  userStatus: string | UserSStatus;
  userPassword: string;
}

interface IAuth {
  login: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): IStore => ({
    isAuthorized: false,
    id: 1,
    userName: "",
    email: "",
    phone: "",
    credits: 0,
    tokens: 0,
    avatar: "",
    userStatus: "ACTIVE",
    userPassword: "",
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
        this.id = isExist.id;
        this.userName = isExist.userName;
        this.email = data.login;
        this.phone = isExist.phone;
        this.credits = isExist.credits;
        this.tokens = isExist.tokens;
        this.avatar = isExist.avatar;
        this.userPassword = isExist.password;
        this.userStatus = isExist.userStatus;
      }
    },
    logout() {
      this.isAuthorized = false;
      this.userName = "";
      this.userPassword = "";
    },
  },
});
