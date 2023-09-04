import React from 'react';
import {getDataWithExpiry} from "../../services/auth/StoreItem";

interface AuthContextType {
    isLoggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = React.useState<boolean>(!!getDataWithExpiry('jwtToken'));

    React.useEffect(() => {
        const interval = setInterval(() => {
            const hasToken = !!getDataWithExpiry('jwtToken');
            if (!hasToken && isLoggedIn) {
                setLoggedIn(false);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;