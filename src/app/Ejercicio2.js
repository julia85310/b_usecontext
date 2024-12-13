'use client';
import React, { createContext, useState } from "react";

const AuthContext = createContext();

export default function AuthContext({ children }){
    
    return (
        <AuthContext.Provider value = {{user, }}>
            {children}
        </AuthContext.Provider>
    );
}