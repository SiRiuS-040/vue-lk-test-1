export enum StatusCode {
  EMPTY = "empty",
  ACTIVE = "active",
  BLOCKED = "blocked",
}

export enum StatusTheme {
  DEFAULT = "default",
  OUTLINE = "outline",
  BADGE = "badge",
}

interface IStatus {
  text: string;
  color: string;
  theme?: StatusTheme;
}

export const STATUSES: Record<StatusCode, IStatus> = {
  [StatusCode.EMPTY]: {
    text: "",
    color: "",
  },
  [StatusCode.ACTIVE]: {
    text: "active",
    color: "active",
  },
  [StatusCode.BLOCKED]: {
    text: "blocked",
    color: "blocked",
  },
};
