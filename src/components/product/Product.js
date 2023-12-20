
import { useEffect, useState } from "react";
import classes from './Product.module.scss'
import { useNavigate, useParams } from "react-router-dom";
import ProductCarousel from "./Carousel";
import { getProduct } from "../services/product-service";
import AddToCart from "./AddToCart";

const Product = () => {

    const navigate = useNavigate();
    const { pid } = useParams();
    const [product, setProduct] = useState(null);

    const [productQuantity, setProductQuantity] = useState(0);
    const [productAvailability, setProductAvailability] = useState(false);

    const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let fetchedProductVariants = [];

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


    const changeProductVariant = function (e) {
        let productVariantID = e.target.value;
        navigate(`/${productVariantID}`)
    }

    const changeProductQuantity = (e) => {
        let quantityValue = e.target.value

        if (product.inventory.ats < quantityValue) {
            setProductAvailability(false)
            setProductQuantity(0)
        }
        if (product.inventory.ats >= quantityValue) {
            setProductAvailability(true)
            setProductQuantity(quantityValue)
        }
    }

    // console.log(product);

    return (<>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-6 h-100">
                    {product && <ProductCarousel product={product}></ProductCarousel>}
                </div>
                <div className="col-sm-6 h-100">
                    <h3>{product && product.name}</h3>
                    <hr />
                    <p>Item No. {product && product.id}</p>
                    <hr />
                    <div className={'container' && classes.productContainer}>
                        <div className="row">
                            <div className="col-sm-8">
                                <h5>Select Color</h5>
                                {product && product.variants.map((el, index) => <button value={el.product_id} key={el.product_id} onClick={changeProductVariant} className="color-value swatch-circle swatch-value">{el.product_id}
                                </button>)}
                            </div>
                            <div className="col-sm-4">
                                <h5>Quantity</h5>
                                <select onChange={changeProductQuantity} name="quantity">
                                    {selectOptions.map((el, index) => (<option key={index} value={el}>{el}</option>))}
                                </select>
                            </div>
                            <div className="col-sm-4 mt-4">
                                Availability
                            </div>
                            <div className="col-sm-8 mt-4">
                                {product && product.inventory.orderable ? "In Stock" : "Out of stock"}
                            </div>
                            <div className="col-sm-12 text-center mt-5">
                                <h2>{product && product.price} {product && product.currency}</h2>
                                {product && <AddToCart pid={pid} quantity={productQuantity} productOrderable={product.inventory.orderable}/>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Product;

