import Axios from 'axios';

const axios = Axios.create({
	baseURL: "https://grim-sandi-naufan-a5e18060.koyeb.app/api",
});

export default axios;