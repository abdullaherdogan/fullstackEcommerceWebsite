import axios from "axios";
export const fetchProductList = async () => {
    const { data } = await axios.get("http://localhost:4000/product");
    return data;
};
export const fetchProduct = async (productId) => {
    const { data } = await axios.get(
        `http://localhost:4000/product/${productId}`
    );
    return data;
};
