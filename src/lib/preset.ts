import axios from 'src/lib/api';

const getPreset = async (id: number) => {
  return await axios.get(`/Preset/${id}`).then((res) => {
    return res.data;
  });
};

const postPreset = async (
  id: number,
  params: Array<{
    plan: string;
    product: string;
    company: string;
    expiration: string;
  }>
) => {
  return await axios.post(`/Preset/${id}`, { data: params }).then((res) => {
    return res.data;
  });
};

export { getPreset, postPreset };
