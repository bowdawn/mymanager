import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiIyIiwibmJmIjoxNTk0NjI3MTUxLCJleHAiOjE1OTQ3MTM1NTEsImlhdCI6MTU5NDYyNzE1MX0.FOauC95cquD5fKEi8kEIM9_0AV455aN4oBV1xi-TrNo';

const instance = axios.create({
  baseURL: 'http://nortina.io:5000',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Security-Policy': 'upgrade-insecure-requests',
  },
});

export default instance;
