import axios from 'axios';
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});
api.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    if (localStorage.getItem('Access_Token')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'Access_Token',
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
interface HttpCallConfig {
  url: string;
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  data?: any;
}
const httpCall = async (config: HttpCallConfig) => {
  const res = await api(config);
  console.log(res);
  if (res.status <= 300) return res;
  throw Error(res.data?.message);
};

export default httpCall;
