import { useCartContext } from "../../context/CartContext";
import { addProductToCart, createCart, getExistingCart } from "../services/cart-service";

const AddToCart = ({ productOrderable, pid, quantity }) => {
  const { cart, setCart } = useCartContext();

  const addToCart = async () => {

    let checkCart;
    let basketID;

    if (localStorage.getItem('basketID') && cart.fault) {
      basketID = localStorage.getItem('basketID');
    } else {
      checkCart = await createCart();
      basketID = checkCart.basket_id;
      localStorage.setItem('basketID',checkCart?.basket_id);
    }

    console.log(checkCart);

    const productData = [
      {
        product_id: pid,
        quantity: quantity * 1,
      },
    ];

    const newCart = await addProductToCart(basketID, productData);
    setCart(newCart);
    console.log(newCart);
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