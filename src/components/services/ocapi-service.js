import * as request from '../api/request';

import {
    AUTH,
    getContentAssetUrl
} from '../constants/endpoints';

const REACT_APP_CLIENT_ID = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

export const getAccessToken = async () => {
    const accessToken = localStorage.getItem('token');

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-dw-client-id': `${REACT_APP_CLIENT_ID}`,
        },
    };

    if (accessToken) {
        request.headers.Authorization = accessToken;
    }

    const type = accessToken ? 'refresh' : 'guest';
    const body = { type };
    request.body = JSON.stringify(body);

    try {
        const response = await fetch(AUTH, request);
        const token = response.headers.get('authorization');

        localStorage.setItem('token', token);
        return token;

    } catch (err) {
        console.log(err);
    }
};

export const getContentAsset = async (cid) => {
    const asset = await request.get(getContentAssetUrl(cid));
    return asset.c_body;
};