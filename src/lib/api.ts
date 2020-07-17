import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mymanager.jinjoosoft.io/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
instance.defaults.headers.common['Authorization'] = sessionStorage.getItem(
  'OhMyManager_Token'
);
export default instance;

const setAuth = (token?: string | null) => {
  if (token) {
    sessionStorage.setItem('OhMyManager_Token', `Bearer ${token}`);
    instance.defaults.headers.common['Authorization'] = sessionStorage.getItem(
      'OhMyManager_Token'
    );
  } else {
    sessionStorage.removeItem('OhMyManager_Token');
    instance.defaults.headers.common['Authorization'] = null;
  }
};

export { setAuth };
