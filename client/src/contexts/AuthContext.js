import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedId] = useState(false);
    const login = (data) => {
        setLoggedId(true);
        setUser(data.user);
    };
    const values = {
        user,
        loggedIn,
        login,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
