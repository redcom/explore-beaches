import { API_URL, TOKEN_NAME } from '../config';
import { readStream } from '../helpers/transformers';

const opts = {
  mode: 'cors',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }),
};

export const apiLogout = ({ token }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'DELETE',
    };

    opts.headers.append(TOKEN_NAME, token); // TODO. Find a way to persist this settings.

    try {
      const response = await fetch(`${API_URL}/user/logout`, payload);
      if (response.status !== 200) {
        throw new Error("Can't logout. Try again later.");
      }
      return;
    } catch (error) {
      throw error;
    }
  };

export const apiGetProfile = ({ token }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'GET',
    };

    opts.headers.append(TOKEN_NAME, token); // TODO. Find a way to persist this settings.

    try {
      const response = await fetch(`${API_URL}/user/me`, payload);
      if (response.status !== 200) {
        throw new Error("Can't get user profile. Try again later.");
      }
      return await readStream(response.body);
    } catch (error) {
      throw error;
    }
  };

export const apiRegister = ({ email, password }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch(`${API_URL}/user/register`, payload);
      if (response.status !== 200) {
        throw new Error("Can't create new user. Try again later.");
      }
      const token = response.headers.get(TOKEN_NAME);
      if (!token) throw new Error('Registration failed. Try again later.');

      return {
        email,
        token,
      };
    } catch (error) {
      throw error;
    }
  };

export const apiLogin = ({ email, password }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    };

    try {
      const response = await fetch(`${API_URL}/user/login`, payload);
      if (response.status !== 200) {
        throw new Error('Can not login');
      }
      const token = response.headers.get(TOKEN_NAME);
      if (!token) throw new Error('Login failed due to invalid token');

      return {
        email,
        token,
      };
    } catch (error) {
      throw error;
    }
  };
