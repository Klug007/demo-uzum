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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ProductCotextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<Singlepage />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ProductCotextProvider>
    </React.StrictMode>
);
