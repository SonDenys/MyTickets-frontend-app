import { atom } from "recoil";
import Cookies from "js-cookie";

export const userTokenState = atom<any>({
  key: "tokenState",
  default: Cookies.get("token") || null,
});

export const userIdState = atom<any>({
  key: "userIdState",
  default: Cookies.get("userId") || null,
});

export const statusDone_state = atom<boolean>({
  key: "statusDone_State",
  default: false,
});

export const statusWorkingOnIt_state = atom<boolean>({
  key: "statusWorkingOnIt_state",
  default: false,
});

export const statusStuck_state = atom<boolean>({
  key: "statusStuck_state",
  default: false,
});

export const statusNotStarted_state = atom<boolean>({
  key: "statusNotStarted_state",
  default: true,
});
