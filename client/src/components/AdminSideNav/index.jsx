import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AdminSideNav() {
    return (
        <nav>
            <ul className="admin-menu">
                <li>
                    <Link to="">
                        <Button colorScheme="blue" variant="ghost">
                            Home
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="products">
                        <Button colorScheme="blue" variant="ghost">
                            Products
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="orders">
                        <Button colorScheme="blue" variant="ghost">
                            Orders
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default AdminSideNav;
