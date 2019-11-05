import axios from 'axios';

// const host = 'http://localhost:4000/api';
const host = 'https://corsanywhere.herokuapp.com/https://www.food2fork.com/api';

export const call = async (method, path, data) => {
    const response = await axios[method](`${host}/${path}`, data);
    return response.data;
}

export default { call };

