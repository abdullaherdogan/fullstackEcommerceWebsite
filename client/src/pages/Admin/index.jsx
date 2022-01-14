import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideNav from "../../components/AdminSideNav";

function Admin() {
    return (
        <div>
            <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <AdminSideNav />
                </GridItem>
                <GridItem colSpan={4}>
                    <Box mt={10}>
                        <Outlet />
                    </Box>
                </GridItem>
            </Grid>
        </div>
    );
}

export default Admin;
