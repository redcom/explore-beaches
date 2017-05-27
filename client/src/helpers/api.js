/* eslint-disable no-constant-condition, no-await-in-loop */

import { API_URL, TOKEN_NAME } from '../config';

const opts = {
  mode: 'cors',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }),
};

export const apiLogin = ({ username, password }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'POST',
      body: JSON.stringify({
        email: username, // TODO change username to email in Signin form
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
        username,
        token,
        isAuthorized: true,
      };
    } catch (error) {
      throw error;
    }
  };

export const apiFetchImages = ({ page = 0 }) =>
  async () => {
    const payload = {
      ...opts,
      method: 'GET',
    };

    try {
      const response = await fetch(`${API_URL}/beaches?page=${page}`, payload);
      if (response.status !== 200) {
        throw new Error('Can not fetch images');
      }
      // haha this is a Streamed Response.
      // It makes sens to wait wait for full payload
      const reader = response.body.getReader();
      let images = '';
      // https://jakearchibald.com/2015/thats-so-fetch/
      if (typeof TextDecoder === 'undefined') {
        throw new Error('Can not use window.TextDecoder use a polyfill');
      }
      while (true) {
        const { done = false, value } = await reader.read();
        if (!done) {
          images += new TextDecoder('utf-8').decode(value);
        } else {
          return JSON.parse(images);
        }
      }
    } catch (error) {
      throw error;
    }
  };

export const apiFetchOneImage = ({ path }) => `${API_URL}/${path}`;
