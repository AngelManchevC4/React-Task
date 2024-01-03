const REACT_APP_HOST = "https://zydc-003.dx.commercecloud.salesforce.com"
const REACT_APP_SITE = "RefArch"
const REACT_APP_OCAPI_VERSION = "v23_2"
const REACT_APP_CLIENT_ID = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

export const BASE_URL = `${REACT_APP_HOST}/s/Sites-${REACT_APP_SITE}-Site/dw/shop/${REACT_APP_OCAPI_VERSION}`;

export const AUTH = `${BASE_URL}/customers/auth`;

export const CREATE_CART_URL = `${BASE_URL}/baskets`;

export const CREATE_ORDER_URL = `${BASE_URL}/orders`;


export const getContentAssetUrl = (cid) =>`${BASE_URL}/content/${cid}`;

export const getProductUrl = (pid) =>`${BASE_URL}/products/${pid}?expand=availability,prices,images,variations,bundled_products`;

export const getCartUrl = (basketId) => `${BASE_URL}/baskets/${basketId}`;

export const getAddProductUrl = (basketId) => `${BASE_URL}/baskets/${basketId}/items`;

export const getRemoveProductUrl = (basketId, productId) => `${BASE_URL}/baskets/${basketId}/items/${productId}`;

export const getAddShippingAddressUrl = (basketId) =>`${BASE_URL}/baskets/${basketId}/shipments/me/shipping_address`;

export const getAddShippingMethodUrl = (basketId) =>`${BASE_URL}/baskets/${basketId}/shipments/me/shipping_method`;

export const getShippingMethodsUrl = (basketId) =>`${BASE_URL}/baskets/${basketId}/shipments/me/shipping_methods`;

export const getAddBillingAddressUrl = (basketId) =>`${BASE_URL}/baskets/${basketId}/billing_address`;

export const getPaymentMethodsUrl = (basketId) =>`${BASE_URL}/baskets/${basketId}/payment_methods`;

export const getAddPaymentUrl = (basketId) =>`${BASE_URL}/baskets/${basketId}/payment_instruments`;
