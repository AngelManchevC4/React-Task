import CartIcon from '../cart/CartIcon';
import classes from './HeaderCartButton.module.scss';
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const HeaderCartButton = (props) => {

  const { cartItemsCount } = useCartContext();

  const navigate = useNavigate();

  const navigateToCartPage = () => {
    navigate("/cart");
  }

  return (
    <button onClick={navigateToCartPage} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span> 
    </button>
  );
};

export default HeaderCartButton;