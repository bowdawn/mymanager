import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mymanager.jinjoosoft.io/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;

const setAuth = (token?: string | null) => {
  if (token) {
    instance.defaults.headers.authorization = `Bearer ${token}`;
  } else {
    instance.defaults.headers.authorization = null;
  }
};

export { setAuth };
