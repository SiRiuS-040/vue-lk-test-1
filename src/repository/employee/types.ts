export interface IStaffItem {
  id: number;
  userName: string;
  email: string;
  phone: string;
  credits: number;
  tokens: number;
  userStatus: string;
}

export enum UserSStatus {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
}

export class Employee {
  id: number;
  userName: string;
  email: string;
  password: string | number;
  phone: string;
  credits: number;
  tokens: number;
  userStatus: string;

  constructor() {
    this.id = Math.ceil(Math.random() * 10000);
    this.userName = "New User";
    this.email = "";
    this.password = "111";
    this.phone = "";
    this.credits = 0;
    this.tokens = 0;
    this.userStatus = UserSStatus.ACTIVE;
  }
}
