import axios, { setAuth } from 'src/lib/api';
const postAuth = async (params: { serviceName: string; key: string }) => {
  if (params.serviceName && params.key) {
    return await axios.post('/Auth/login', params).then((res) => {
      setAuth(res.data);
      return res.data;
    });
  } else {
    setAuth();
    return 'token removed';
  }
};
export { postAuth };
