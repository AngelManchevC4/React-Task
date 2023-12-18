
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCarousel from "./Carousel";

import { getProduct } from "../services/product-service";

const Product = () => {

    const navigate = useNavigate();
    const { pid } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await getProduct(pid);
            if (fetchedProduct.fault) {
                navigate("/not-found");
            } else {
                setProduct(fetchedProduct);
            }
        };
        fetchProduct();
    }, [pid, navigate]);

    console.log(product);

    return (<>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-6 h-100">
                    { product && <ProductCarousel product={product}></ProductCarousel>}
                </div>
                <div className="col-sm-6 h-100">
                    <h1>{product && product.name}</h1>
                </div>
            </div>
        </div>
    </>);
}

export default Product;

