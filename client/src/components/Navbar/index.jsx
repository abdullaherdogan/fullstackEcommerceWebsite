import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/AuthContext";
function Navbar() {
    const { loggedIn } = useAuthContext();
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
                        <Link to="#">
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
