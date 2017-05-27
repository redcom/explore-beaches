// requests are proxyed to backend becase we said so in package.json
// the applicaiton on server will run from the same host so CORS should not be a problem.

export const API_PORT = 3000;
export const TOKEN_NAME = 'x-auth';

const { protocol, hostname } = { protocol: 'http:', hostname: '139.59.158.8' };
export const API_URL = `${protocol}//${hostname}:${API_PORT}`;
