import { defineStore } from "pinia";

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

const usersData = {
  "111": {
    password: "111",
    userName: "John Doe",
    id: 100,
    email: "test@test",
    phone: "+71111111111",
    credits: 22,
    tokens: 33,
    userStatus: "ACTIVE",
  },
  "222": {
    password: "222",
    userName: "Darrell Steward",
    id: 101,
    email: "test@test",
    phone: "+71111111111",
    credits: 11,
    tokens: 55,
    userStatus: "ACTIVE",
  },
};

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
      this.userLogin = data.login;
      this.credits = usersData[data.login].credits;
      this.tokens = usersData[data.login].tokens;
    },
    logout() {
      this.isAuthorized = false;
      this.userName = "";
      this.userLogin = "";
      this.userPassword = "";
    },
  },
});
