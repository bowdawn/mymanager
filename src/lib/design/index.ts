import axios from 'src/lib/api';

const getDesign = async () => {
  return await axios.get('/Design').then((res) => {
    return res.data;
  });
};

const deleteDesign = async (id: number) => {
  return await axios.delete(`/Design/${id}`).then((res) => {
    return res.data;
  });
};

export { getDesign, deleteDesign };
