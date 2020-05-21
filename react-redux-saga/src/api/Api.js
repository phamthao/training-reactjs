import Axios from 'axios';

const Headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const getRequest = async (url) => {
  const response = await Axios.get(url, { headers: Headers })
    .then((res) => res)
    .catch((error) => console.log(error));

  return response;
};
