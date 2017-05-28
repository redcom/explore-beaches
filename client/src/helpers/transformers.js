/* eslint-disable no-constant-condition, no-await-in-loop */
// https://jakearchibald.com/2015/thats-so-fetch/
export const readStream = async stream => {
  // It makes sens to wait wait for full payload
  const reader = stream.getReader();
  let content = '';
  if (typeof TextDecoder === 'undefined') {
    throw new Error('Can not use window.TextDecoder use a polyfill');
  }
  while (true) {
    const { done = false, value } = await reader.read();
    if (!done) {
      content += new TextDecoder('utf-8').decode(value);
    } else {
      return JSON.parse(content);
    }
  }
};
