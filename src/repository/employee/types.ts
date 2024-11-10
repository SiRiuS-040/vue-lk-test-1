export interface IStaffItem {
  id: number;
  userName: string;
  avatar: string;
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

export class Employee implements IStaffItem {
  id: number;
  userName: string;
  avatar: string;
  email: string;
  password: string | number;
  phone: string;
  credits: number;
  tokens: number;
  userStatus: UserSStatus;

  constructor() {
    this.id = Math.ceil(Math.random() * 10000);
    this.userName = "";
    this.avatar = "";
    this.email = "";
    this.password = "111";
    this.phone = "";
    this.credits = 0;
    this.tokens = 0;
    this.userStatus = UserSStatus.ACTIVE;
  }
}
