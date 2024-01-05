import * as request from '../api/request';

import {
    CREATE_CART_URL,
    getAddProductUrl,
    getRemoveProductUrl,
    getCartUrl,
    getBasketDurationUrl
} from '../constants/endpoints';


export const createCart = async () => {
    const cart = await request.post(CREATE_CART_URL);
    if(cart.fault){
        localStorage.setItem('basketID',cart.fault.arguments.basketIds)
    }
    return cart;
};

export const getExistingCart = async(basketId)=>{
    const cart = await request.get(getCartUrl(basketId))
    return cart;
}

export const addProductToCart = async (basketId, productData) => {
    const cart = await request.post(getAddProductUrl(basketId), productData);
    return cart;
};

export const removeProductFromCart = async (basketId, productId) => {
    const cart = await request.del(getRemoveProductUrl(basketId, productId));
    return cart;
};

export const getBasketDuration = async(instanceType,groupId,preferenceId)=>{
    const basketDuration = await request.get(getBasketDurationUrl(instanceType,groupId,preferenceId));
    return basketDuration;
}