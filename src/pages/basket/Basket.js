import React, { useContext } from "react";
import "./Basket.css";
import { BasketContext } from "../../context/BasketContext";

function Basket() {
    const { basket, removeFromBasket } = useContext(BasketContext);
    return (
        <div className="basket">
            <h1>
                Ваша корзина, <span className="amountIn"> {"товар"}</span>{" "}
            </h1>
            {basket.map((item) => (
                <li key={item.id}>
                    {item.title} - ${item.price} x {item.quantity}{" "}
                    <button onClick={() => removeFromBasket(item.id)}>
                        Remove
                    </button>
                </li>
            ))}
        </div>
    );
}

export default Basket;
