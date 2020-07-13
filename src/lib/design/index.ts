import axios from 'src/lib/api';

const getDesign = async () => {
  return await axios
    .get('/Design')
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getDesign };
