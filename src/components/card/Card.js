import React from "react";
import heart from "../../assets/heart.png";
import star from "../../assets/star.png";
import "./Card.css";
import bag2 from '../../assets/shopping-bag (1).png'
import { Link } from "react-router-dom";
function Card({ image, title, product }) {
    return (
        <div className="card">
            <Link
                to={`/product/${product.id}`}
                state={product}
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
                        <div>
                            <img src={bag2} alt="" className="bag2"/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
