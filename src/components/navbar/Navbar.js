import React from "react";
import "./Navbar.css";
import img2 from "../../assets/search-document.png";
import image from "../../assets/img.webp";
import img3 from "../../assets/search.png";
import account from "../../assets/account.png";
import heart from "../../assets/heart.png";
import bag from "../../assets/shopping-bag.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar_collection">
                <li>
                    <Link to={"/"}>
                        <img src={image} alt="" className="image" />
                        uzum market
                    </Link>
                </li>
                <li>
                    <Link to={"/about"}>
                        {" "}
                        <img src={img2} alt="" className="image2" />
                        Каталог
                    </Link>
                </li>
                <li>
                    <div className="search">
                        <input
                            type="text"
                            name=""
                            id="text"
                            placeholder="Искать товары и категории"
                        />
                        <div className="search2">
                            <img src={img3} alt="" className="img3" />
                        </div>
                    </div>
                </li>
                <li className="li">
                    <img src={account} alt="" />
                    <h1>Войти</h1>
                </li>
                <li className="li">
                    <img src={heart} alt="" />
                    <h1>Избранное</h1>
                </li>
                <li className="li">
                    <img src={bag} alt="" />
                    <h1>Корзина</h1>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
