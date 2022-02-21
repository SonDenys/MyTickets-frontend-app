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
