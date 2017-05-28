import { API_URL } from '../config';
import { readStream } from '../helpers/transformers';

const opts = {
  mode: 'cors',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }),
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
      const content = await readStream(response.body);
      return content;
    } catch (error) {
      throw error;
    }
  };

export const apiFetchOneImage = ({ path }) => `${API_URL}/${path}`;
