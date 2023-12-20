import HeaderCartButton from "./components/layout/HeaderCartButton";
import classes from './App.scss';
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
import Main from "./components/layout/Main";


import { useEffect, useState } from "react";
import { getExistingCart } from "./components/services/cart-service";
import { useCartContext } from "./context/CartContext";

function App() {

  const {cart,setCart} =useCartContext();

  const [existingBasket, setExistingBasket] = useState()

  useEffect(() => {
    const getExistingBasket = async () => {
      let basketID = localStorage.getItem('basketID');
      let basket = await getExistingCart(basketID);
      setCart(basket);
    }
    getExistingBasket();
  }, [])

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
