import axios from 'src/lib/api';

const getCard = async () => {
  return await axios.get('/Card').then((res) => {
    return res.data;
  });
};

const getCardType = async (id: number) => {
  return await axios.get(`/Card/${id}`).then((res) => {
    return res.data;
  });
};

export { getCard, getCardType };
