import axios from 'src/lib/api';

const searchPlan = async (params: {
  Gender: string;
  Age: string;
  product: Array<string>;
  plan: Array<string>;
  company: Array<string>;
  expiration: Array<string>;
  type: Array<string>;
}) => {
  return await axios.get('/Plan/search', { params: params }).then((res) => {
    return res.data;
  });
};

const singlePlan = async (params: {
  Gender: string;
  Age: string;
  product: string;
  plan: string;
  company: string;
  expiration: string;
  type: string;
}) => {
  return await axios.get('/Plan/single', { params: params }).then((res) => {
    return res.data;
  });
};

const selectPlan = async (params: {
  Gender: string;
  Age: string;
  product: Array<string>;
  plan: Array<string>;
  company: Array<string>;
  expiration: Array<string>;
  type: Array<string>;
}) => {
  return await axios.get('/Plan/select', { params: params }).then((res) => {
    return res.data;
  });
};

export { searchPlan, singlePlan, selectPlan };
