import React, { useContext, useState } from "react";
import heart from "../../assets/heart.png";
import star from "../../assets/star.png";
import "./Card.css";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
// import { toast, ToastContainer } from "react-toastify";

function Card({ image, title, product }) {
    const { addToBasket } = useContext(BasketContext);
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToBasket = (product) => {
        addToBasket(product);
        setShowNotification(true);

        // Скрываем уведомление через 2 секунды
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };
    return (
        <div className="card">
            <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
            >
                <div className="image-card">
                    <img src={image} alt="" />
                    <img src={heart} alt="" className="heart" />
                </div>
                <div className="card-text">
                    <p>{title}</p>
                    <p>
                        {" "}
                        <img src={star} alt="" className="star" />{" "}
                        {product.rating} ({product.stock})
                    </p>
                    <p className="hire">
                        {Math.floor(product.price * 4)} сум/мес
                    </p>
                    <div className="bottom ">
                        <div className="price">
                            <p>
                                <del>{product.price * 15} сум</del>
                            </p>
                            <p>{product.price * 12} сум</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="item-bag">
                <button onClick={() => handleAddToBasket(product)}>
                    <Bag className="bag2" />
                </button>
                {showNotification && (
                    <div className="notification">
                        <img src={product.images[0]} alt="" />
                        <div className="notification-item">
                            <h1>Ваш товар добавлен в корзину:</h1>
                            <h1>{product.title}</h1>
                        </div>
                        <Link to={"./basket"} className="tranfer">
                            Перейти в корзину
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
