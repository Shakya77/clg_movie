import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

const EXPIRY_TIME = 1000 * 60 * 1; // 10 minutes

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedExpiry = localStorage.getItem("expiry");

        if (storedUser && storedExpiry) {
            const now = new Date().getTime();
            if (now < parseInt(storedExpiry)) {
                setUser(JSON.parse(storedUser));

                if (location.pathname === "/login") {
                    navigate("/trending");
                }
            } else {
                localStorage.removeItem("user");
                localStorage.removeItem("expiry");
            }
        }
    }, [navigate, location.pathname]);

    const login = (username, password) => {
        if (username === "admin" && password === "admin") {
            const userData = { username, password };
            const expiryTime = new Date().getTime() + EXPIRY_TIME;

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("expiry", expiryTime);
            navigate("/trending");
        } else {
            alert("Invalid Credentials");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("expiry");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
