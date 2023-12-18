import * as request from '../api/request';
import { getProductUrl } from '../constants/endpoints';


export const getProduct = async (pid) => {
    const product = await request.get(getProductUrl(pid));
    return product;
};

