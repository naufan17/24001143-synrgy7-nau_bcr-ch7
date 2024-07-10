import Axios from 'axios';

const axios = Axios.create({
	baseURL: process.env.REACT_APP_ENDPOINT_API
});

export default axios;