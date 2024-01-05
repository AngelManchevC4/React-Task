import * as request from '../api/request';

import {
    CREATE_ORDER_URL,
    getAddBillingAddressUrl,
    getAddPaymentUrl,
    getAddShippingAddressUrl,
    getAddShippingMethodUrl,
    getPaymentMethodsUrl,
    getShippingMethodsUrl,
} from '../constants/endpoints';

export const addShippingAddress = async (basketId, shippingData) => {
    const cartWithAddress = await request.put(
        getAddShippingAddressUrl(basketId),
        shippingData
    );
    return cartWithAddress;
};

export const addShippingMethod = async (basketId, shippingMethodId) => {
    const cartWithShippingMethod = await request.put(
        getAddShippingMethodUrl(basketId), { id: shippingMethodId }
    );
    return cartWithShippingMethod;
};

export const getShippingMethods = async (basketId) => {
    const shippingMethods = await request.get(getShippingMethodsUrl(basketId));
    return shippingMethods;
}

export const addBillingAddress = async (basketId, billingAddressData) => {
    const cartWithBillingAddress = await request.put(
        getAddBillingAddressUrl(basketId),
        billingAddressData
    );
    return cartWithBillingAddress;
}

export const getPaymentMethods = async (basketId) => {
    const paymentMethods = await request.get(getPaymentMethodsUrl(basketId));
    return paymentMethods;
}


export const addPayment = async (basketId, paymentObject) => {
    const payment = await request.post(
        getAddPaymentUrl(basketId),
        paymentObject
    );
    return payment;
}

export const createOrder = async (basketId) => {
    const order = await request.post(CREATE_ORDER_URL, basketId);
    return order;
}