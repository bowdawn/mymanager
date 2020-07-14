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

const putDesign = async (params: {
  name: string;
  gender: 'M' | 'F';
  birthDay?: Date | null;
  age?: number;
  cardType?: string;
  data?: Array<{
    name: string;
    plan: string;
    product: string;
    company: string;
    expiration: string;
    amount: number;
    premium: Array<{
      age: number;
      amount: number;
      difference: number;
    }>;
    guarantee: Array<{
      name: string;
      subscriptionFee: string;
      premium: number;
    }>;
  }>;
}) => {
  return await axios.put(`/Design`, params).then((res) => {
    return res.data;
  });
};

export { getDesign, deleteDesign, putDesign };
