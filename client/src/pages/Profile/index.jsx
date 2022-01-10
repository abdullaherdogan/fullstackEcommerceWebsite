import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Profile() {
    const { user, logout } = useAuthContext();
    const navigate = useNavigate();
    const handleLogout = async () => {
        logout(() => {
            navigate("/");
        });
    };
    return (
        <div>
            <Text>Hi, {user?.email}</Text>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
}

export default Profile;
