import Axios from 'axios';

export const getRequest = async (url) => {
  const Headers = {
    'Accept' : 'application/json',
    'Content-Type': 'application/json',
    'Cache': "no-cache",
    'Access-Control-Allow-Origin': '*',
    // 'Authorization': `Bearer `,
    // 'Host': 'dummy.restapiexample.com' 
  };

  const response = await Axios.get(url, { withCredentials: true, headers: Headers })
    .then((res) => res)
    .catch((error) => console.log(error));

  return response;
};

export const postRequest = async (url, data) => {

  console.log('postRequest');
  
  const response = await fetch(url, {
    mode: 'cors',
    method: 'GET',
    dataType: 'json',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json;charset=utf-8',
      'Host': 'developer.cdn.mozilla.net' 

    }
  })
    .then(response => response)
    .then(data => {
      console.log(data);

    });
  return response;
};