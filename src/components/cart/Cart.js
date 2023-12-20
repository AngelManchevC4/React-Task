import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <main className="container py-3">
      <h1>Cart</h1>
      <div className="d-flex rounded text-secondary align-items-center py-4 flex-column border">
        {cart && cart?.product_items?.length > 0 ? (
          <>
            <div className="container">
              <CartProducts cart={cart} />
            </div>
            <Link
              className="btn btn-primary d-flex align-items-center"
              to="/checkout"
            >
              Checkout
            </Link>
          </>
        ) : (
          <div className="row py-3">
            <p className="col-12 text-center pt-4">
              There are curently no products in the cart
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;