import React, { useEffect } from "react";
import Card from "../../components/Card";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../api";
function Products() {
    const { isLoading, error, data } = useQuery("products", fetchProductList);
    useEffect(() => {
        console.log(data && data);
    }, [data]);
    if (isLoading) return "Loading";
    if (error) return "An error " + error.message;

    return (
        <div>
            <Grid templateColumns="repeat(5,1fr)" gap={4}>
                <Card productId={1} />
                <Card productId={2} />
                <Card productId={3} />
                <Card productId={5} />
                <Card productId={6} />
            </Grid>
        </div>
    );
}

export default Products;
