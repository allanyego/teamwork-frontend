import { User } from "../store/model-types";
const SERVER_URL = 'https://teamwork-ke-dev.herokuapp.com/api/v1';

export interface Auth {
  email: string;
  password: string;
}

export async function signin(creds: Auth): Promise<User> {
  try {
    const res = await fetch(`${SERVER_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...creds as any,
      }),
    });

    const jsonRes = await res.json();
    if (res.status !== 200) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}

export interface NewUserDetails {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  department: string,
  role: string,
  mobile: string,
  address: string,
  password: string,
  type: string;
  gender: string;
}

export async function signup(details: NewUserDetails): Promise<User> {
  try {
    const res = await fetch(`${SERVER_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...details as any,
      }),
    });

    const jsonRes = await res.json();
    if (res.status !== 201) {
      throw new Error(jsonRes.error);
    }
    return jsonRes.data;
  } catch (e) {
    throw e;
  }
}