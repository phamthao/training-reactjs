import Axios from 'axios';
export const getRequest = async (url) => {
    const Headers = {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
    };

    const response = await Axios.get(url, {headers: Headers})
        .then((res) => res)
        .catch((error) => error);
    
    return response;
};