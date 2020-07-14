import axios from 'src/lib/api';

const searchPlan = async (params: { Gender: string; Age: string }) => {
  return await axios.get('/Plan/search', { params: params }).then((res) => {
    return res.data;
  });
};

export { searchPlan };
