import classes from './Main.module.scss';
import { Route, Routes } from "react-router-dom";
import Product from '../product/Product';
import NotFound from '../pages/NotFound';
import Cart from '../cart/Cart';
import Checkout from '../pages/Checkout';
import Order from '../pages/Order';
const Main = (props) => {

    return (<>
        <div className={classes.main}>
            <Routes>
                <Route path="/:pid" element={<Product/>} />
                <Route path="/cart" element={<Cart></Cart>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/order/:orderId" element={<Order/>} />
                <Route path="/not-found" element={<NotFound/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>

    </>);
}

export default Main;

