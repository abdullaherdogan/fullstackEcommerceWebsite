import React, { useEffect } from "react";
import Card from "../../components/Card";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../api";
function Products() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery("products", fetchProductList, {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 12;
            if (!morePagesExist) {
                return;
            }
            return allGroups.length + 1;
        },
    });
    useEffect(() => {
        console.log(data && data);
    }, [data]);
    if (status === "loading") return "Loading";
    if (status === "error") return "An error " + error.message;

    return (
        <div>
            <Grid templateColumns="repeat(5,1fr)" gap={4}>
                {data.pages.map((group, id) => (
                    <React.Fragment key={id}>
                        {group.map((item) => (
                            <Box key={item._id}>
                                <Card item={item} />
                            </Box>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
            <Flex>
                <Button
                    onClick={() => fetchNextPage()}
                    isLoading={isFetchingNextPage}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? "Loading more..."
                        : hasNextPage
                        ? "Load More"
                        : "Nothing more to load"}
                </Button>
            </Flex>
        </div>
    );
}

export default Products;
