import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductCotextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    let data = {
        isLoading,
        setIsLoading,
    };

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};
