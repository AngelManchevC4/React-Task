import classes from './Main.module.scss';
import { Route, Routes } from "react-router-dom";
import Product from '../product/Product';
import NotFound from '../pages/NotFound';
const Main = (props) => {

    return (<>
        <div className={classes.main}>
            <Routes>
                <Route path="/:pid" element={<Product/>} />
                <Route path="/cart" />
                <Route path="/checkout" />
                <Route path="/order/:orderId" />
                <Route path="/not-found" element={<NotFound/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>

    </>);
}

export default Main;

