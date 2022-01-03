import React from "react";
import { Box, Image, Button, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Card({ productId }) {
    return (
        <GridItem
            border="1px"
            borderColor="gray.300"
            borderRadius="lg"
            overflow="hidden"
        >
            <Link to={`/products/${productId}`}>
                <Image
                    src="https://picsum.photos/300/200"
                    p={0}
                    m={0}
                    loading="lazy"
                />
                <Box p={4}>
                    <Box d="flex" alignItems="baseline">
                        22/06/2022
                    </Box>
                    <Box
                        mt={1}
                        fontWeight="semibold"
                        lineHeight="light"
                        as="h4"
                    >
                        Product Title
                    </Box>
                    <Box>100TL</Box>
                </Box>
            </Link>
            <Button colorScheme="pink" variant="outline" m={3} mt={1}>
                Add to Basket
            </Button>
        </GridItem>
    );
}

export default Card;
