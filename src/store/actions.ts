import { User } from "./model-types";
import { UserActionTypes, LOGIN, LOGOUT } from "./action-types";

export function login(user: User): UserActionTypes {
  return {
    type: LOGIN,
    payload: user,
  }
}

export function logout(): UserActionTypes {
  return {
    type: LOGOUT,
  }
}