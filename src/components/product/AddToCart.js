import Cookies from "universal-cookie";
import { useCartContext } from "../../context/CartContext";
import { addProductToCart, createCart, getBasketDuration } from "../services/cart-service";

const AddToCart = ({ productOrderable, pid, quantity }) => {
  
  const { cart, setCart } = useCartContext();
  
  const cookies = new Cookies();

  const addToCart = async () => {

    let basketID = cookies.get('basketID');
    let checkCart;

    if (!basketID || (cart.fault && isBasketExpired(cookies))) {
      checkCart = await createCart();
      basketID = checkCart.basket_id;
      updateBasketCookie(basketID);
    }

    const productData = [
      {
        product_id: pid,
        quantity: quantity * 1,
      },
    ];

    const newCart = await addProductToCart(basketID, productData);

    setCart(newCart);
  };

  const isBasketExpired = (cookies) => {
    const expirationDate = cookies.get('basketIDExpires');
    return expirationDate && new Date(expirationDate) < new Date();
  };

  const updateBasketCookie = (basketID) => {
    cookies.set('basketID', basketID, {
      expires: new Date(Date.now() + 4 * 60 * 60 * 1000), // Set to expire in 4 hours
    });

    // Update the expiration date cookie
    cookies.set('basketIDExpires', new Date(Date.now() + 4 * 60 * 60 * 1000), {
      expires: new Date(Date.now() + 4 * 60 * 60 * 1000), // Set to expire in 4 hours
    });
  };
  return productOrderable ? (
    <button
      className="product-add-to-cart add-to-cart-button btn btn-dark"
      onClick={addToCart}
    >
      Add to Cart
    </button>
  ) : (
    <h5 className="not-available-text text-danger">
      Product is currently not available.
    </h5>
  );
};
export default AddToCart;