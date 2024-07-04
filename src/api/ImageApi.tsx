import axios from "../config/Api";

const requestUploadImageCar = async (image: any): Promise<string | null> => {
    try {
        const token = sessionStorage.getItem('token');
        const result = await axios.post('/car/image', {
            image
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data.data.url;
    } catch(e) {
        return null;
    }
}

export { requestUploadImageCar };