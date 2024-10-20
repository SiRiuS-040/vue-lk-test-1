import { defineStore } from "pinia";

interface IStore {
  isAuthorized: boolean;
  userName: string;
  userPassword: string;
}

interface IAuth {
  login: string;
  password: string;
}

const usersData = {
  "111": {
    password: "111",
    userName: "John Doe",
  },
  "222": {
    password: "222",
    userName: "Darrell Steward",
  },
};

export const useAuthStore = defineStore("auth", {
  state: (): IStore => ({
    isAuthorized: false,
    userName: "",
    userPassword: "",
  }),
  getters: {},
  actions: {
    async authirize(data: IAuth) {
      console.log("имитация authorize");

      if (data.login && !usersData[data.login]) {
        console.log("имитация - нет таког опользователя");

        throw new Error("Incorrect Email address or Password");
      }

      if (usersData[data.login].password !== data.password) {
        console.log("имитация - Пароль НЕ верный");

        throw new Error("Неверные логин или пароль");
      }

      console.log("имитация - Пароль верный");
      this.isAuthorized = true;
      this.userName = usersData[data.login].userName;
      this.userPassword = usersData[data.login].password;
    },
    logout() {
      this.isAuthorized = false;
      this.userName = "";
    },
  },
});
