import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ProductCarousel = (props) => {

    let images = props.product.image_groups[0].images;
    console.log(images);

    return (
        <Carousel>
            {images.map((image, key) => (
                <Carousel.Item className={`carousel-item`} key={key}>
                    <img
                        src={image.link}
                        alt={image.title}
                        loading="lazy"
                        className="d-block w-100"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;
