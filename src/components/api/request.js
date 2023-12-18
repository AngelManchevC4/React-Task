import { getAccessToken } from "../services/ocapi-service";

const REACT_APP_CLIENT_ID = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

export const request = async (method, url, data) => {
    const options = {
        method,
        headers: {
            'Authorization': await getAccessToken(),
            'Content-Type': 'application/json',
            'x-dw-client-id': `${REACT_APP_CLIENT_ID}`,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error);
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');