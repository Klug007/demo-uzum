import React from "react";
import "./Singlepage.css";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Singlepage() {
    const product = useLocation().state;
    return (
        <div className="product-details">
            {/* <div className="image-detail">
                <img src={product.images[0]} alt="" />
            </div> */}
            <div className="image-detail">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        product.images.map(image => (
                            <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="text-detail">
                <div className="rating">
                    <div className="rating2">
                        <p>
                            {" "}
                            <img src={star} alt="" className="star" />{" "}
                            {product.rating} ({product.stock})
                        </p>
                        <p>Более 12000 заказов</p>
                    </div>
                    <div>
                        <p>
                            <img src={heart} alt="" className="heart2" /> В
                            желания
                        </p>
                    </div>
                </div>
                <h1>{product.title}</h1>
                <div className="seller">
                    <div className="seller2">
                        <p>Продавец:</p>
                        <p>Есинбек Тиллабоев</p>
                    </div>
                    <div className="seller2">
                        <p>Доставка:</p>
                        <p>1 день, бесплатно</p>
                    </div>
                </div>
                <div className="amount">
                    <p>Количество:</p>
                    <div>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                </div>
                <div className="price1">
                    <p>Цена:</p>
                    <div>
                        <p style={{ fontSize: "24px" }}>
                            {product.price * 12} сум
                        </p>
                        <p style={{ color: "grey" }}>
                            <del>{product.price * 15} сум</del>
                        </p>
                    </div>
                </div>

                <div className="credit">
                    <p>
                        <span style={{ backgroundColor: "yellow" }}>
                            От {Math.floor(product.price / 2)} сум/мес
                        </span>{" "}
                        в рассрочку
                    </p>
                </div>

                <div className="button">
                    <button>Добавить в корзину</button>
                    <button>Купить в 1 клик</button>
                </div>

                <div className="description">
                    <p>Кратко о товаре:</p>
                    <li>{product.description}</li>
                </div>
            </div>
        </div>
    );
}

export default Singlepage;