export enum StatusCode {
  ACTIVE = "active",
  BLOCKED = "blocked",
}

export enum StatusTheme {
  DEFAULT = "default",
  OUTLINE = "outline",
}

interface IStatus {
  text: string;
  color: string;
  theme?: StatusTheme;
}

export const STATUSES: Record<StatusCode, IStatus> = {
  [StatusCode.ACTIVE]: {
    text: "active",
    color: "active",
  },
  [StatusCode.BLOCKED]: {
    text: "blocked",
    color: "blocked",
  },
};
