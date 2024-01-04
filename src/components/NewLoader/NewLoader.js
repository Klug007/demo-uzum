import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./NewLoader.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function NewLoader() {
    const { isLoading } = useContext(ProductContext);
    return isLoading ? (
        <div className="Skeleton">
            <Skeleton />
            <Skeleton count={5} />
        </div>
    ) : (
        <></>
    );
}

export default NewLoader;
