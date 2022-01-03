import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
function ProductDetail() {
    const { productId } = useParams();
    const { isLoading, isError, data } = useQuery(
        ["product", productId],
        () => {
            fetchProduct(productId);
        }
    );
    if (isLoading) return "Loading...";
    if (isError) return "Error.";
    return <div>Detail {data && data}</div>;
}

export default ProductDetail;
