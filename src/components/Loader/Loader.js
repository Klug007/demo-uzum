import React, { useContext } from "react";
import ReactLoading from "react-loading";
import "./Loader.css";
import { ProductContext } from "../../context/ProductContext";

function Loader() {
    const { isLoading } = useContext(ProductContext);
    return isLoading ? (
        <div className="loader">
            <ReactLoading
                type="bars"
                height={500}
                width={500}
                color="blue"
            ></ReactLoading>
        </div>
    ) : (
        <></>
    );
}

export default Loader;
