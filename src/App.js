import HeaderCartButton from "./components/layout/HeaderCartButton";
import classes from './App.scss';
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
import Main from "./components/layout/Main";


import { useEffect, useState } from "react";
import { getExistingCart } from "./components/services/cart-service";
import { useCartContext } from "./context/CartContext";
import Cookies from "universal-cookie";

function App() {

  const { cart, setCart } = useCartContext();

  useEffect(() => {
    const getExistingBasket = async () => {
      const cookies = new Cookies();
      let basketID = cookies.get('basketID');
      
      if (basketID) {
        let basket = await getExistingCart(basketID);
        setCart(basket);
      }
    };

    getExistingBasket();
  }, [setCart]);

  console.log(cart);
  return (
    <>
      <div className='App main-section'>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </div>
    </>
  );
}

export default App;
