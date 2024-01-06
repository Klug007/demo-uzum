import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Singlepage from "./pages/singlepage/Singlepage";
import Footer from "./components/footer/footer";
import { ProductCotextProvider } from "./context/ProductContext";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Basket from "./pages/basket/Basket";
import { BasketProvider } from "./context/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ProductCotextProvider>
                <BasketProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/basket" element={<Basket />} />
                            <Route
                                path="/product/:id"
                                element={<Singlepage />}
                            />
                            <Route path="*" element={<h1>Not Found</h1>} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </BasketProvider>
            </ProductCotextProvider>
        </Provider>
    </React.StrictMode>
);
