'use client';
import React, { createContext, useState } from "react";

 const AuthContext = createContext();

export function AuthProvider({ children }){
    const [user, setUser] = useState({nombre: null});

    const login = (nombre) => {
        setUser({nombre: nombre});
    };

    const logout = () => {
        setUser({nombre: null});
    };

    return (
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;