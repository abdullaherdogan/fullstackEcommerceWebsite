import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useBasketContext } from "../../contexts/BasketContext";
function Navbar() {
    const { loggedIn, user } = useAuthContext();
    const { items } = useBasketContext();
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">eCommerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                {!loggedIn && (
                    <>
                        <Link to="/login">
                            <Button
                                colorScheme="pink"
                                marginRight={3}
                                size="sm"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                colorScheme="pink"
                                variant="outline"
                                size="sm"
                            >
                                Register
                            </Button>
                        </Link>
                    </>
                )}
                {loggedIn && (
                    <>
                        {items?.length > 0 && (
                            <Link>
                                <Button colorScheme="pink">
                                    Basket {items.length}
                                </Button>
                            </Link>
                        )}
                        {user && (
                            <Link to="/admin">
                                <Button colorScheme="pink" variant="ghost">
                                    Admin Panel
                                </Button>
                            </Link>
                        )}
                        <Link to="/profile">
                            <Button
                                colorScheme="blue"
                                marginRight={3}
                                size="sm"
                            >
                                Profile
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
