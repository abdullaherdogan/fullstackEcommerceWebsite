import { useState, createContext, useEffect, useContext } from "react";
import { fetchMe, fetchLogout } from "../api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedId] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const me = await fetchMe();
                if (me) {
                    setUser(me);
                    setLoggedId(true);
                }
            } catch (error) {}
        })();
    }, []);

    const login = (data) => {
        setLoggedId(true);
        setUser(data.user);
        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("refresh-token", data.refreshToken);
    };
    const logout = async (callback) => {
        setLoggedId(false);
        setUser(null);
        await fetchLogout();
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("access-token");
        callback();
    };
    const values = {
        user,
        loggedIn,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
