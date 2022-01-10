import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const addToBasket = (data) => {
        setItems((prev) => [...prev, data]);
    };
    const values = {
        items,
        setItems,
        addToBasket,
    };
    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasketContext = () => useContext(BasketContext);
