import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(() => {
        // try {
            const storeBasket = localStorage.getItem("basket");
            return storeBasket ? JSON.parse(storeBasket) : [];
        // } catch (error) {
        //     console.error(
        //         "Error parsing basket data from Local Storage",
        //         error
        //     );
        //     return [];
        // }
    });

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (item) => {
        const existingItemIndex = basket.findIndex(
            (basketItem) => basketItem.id === item.id
        );

        if (existingItemIndex !== -1) {
            const newBasket = [...basket];
            newBasket[existingItemIndex] = {
                ...newBasket[existingItemIndex],
                quantity: newBasket[existingItemIndex].quantity + 1,
            };
            setBasket(newBasket);
        } else {
            setBasket([...basket, { ...item, quantity: 1 }]);
        }
    };

    const removeFromBasket = (id) => {
        const newBasket = basket.filter((item) => item.id !== id);
        setBasket(newBasket);
    };

    return (
        <BasketContext.Provider
            value={{ basket, addToBasket, removeFromBasket }}
        >
            {children}
        </BasketContext.Provider>
    );
};
