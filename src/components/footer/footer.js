import React from "react";
import "./footer.css";
import {
    FaAppleAlt,
    FaDiscord,
    FaInstagram,
    FaGooglePlay,
} from "react-icons/fa";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";

function footer() {
    return (
        <div className="Footer">
            <div className="layer-1">
                <div className="box">
                    <h1>О нас</h1>
                    <p>Пункты выдачи</p>
                    <p>Вакансии</p>
                </div>
                <div className="box">
                    <h1>Пользователям</h1>
                    <p>Пункты выдачи</p>
                    <p>Вопрос - Ответ</p>
                </div>
                <div className="box">
                    <h1>Для предпринимателей</h1>
                    <p>Пункты выдачи</p>
                    <p>Вход для продавцов</p>
                </div>
                <div className="box">
                    <h1>Скачать приложение</h1>
                    <div className="icons">
                        <div className="icons">
                            <IconContext.Provider value={{ size: "1.5em" }}>
                                <FaAppleAlt />
                            </IconContext.Provider>
                            <p>AppleStore</p>
                        </div>
                        <div className="icons">
                            <IconContext.Provider value={{ size: "1.5em" }}>
                                <FaGooglePlay />
                            </IconContext.Provider>
                            <p>Google Play</p>
                        </div>
                    </div>
                    <h1>Uzum в соцсетях</h1>
                    <div className="icons">
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <FaYoutube />
                            <FaFacebook />
                            <FaDiscord />
                            <FaInstagram />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className="layer-2">
                <hr />
                <div className="bottom-info">
                    <div className="row">
                        <p>Соглашение о конфиденциальности</p>
                        <p>Пользовательское соглашение</p>
                    </div>
                    <div>
                        <p>
                            «2023© ООО «UZUM MARKET». ИНН 309376127. Все права
                            защищены»
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;
