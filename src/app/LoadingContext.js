'use client';
import { createContext, useState } from "react";
const LoadingContext = createContext();
export default LoadingContext;

export function LoadingProvider({children}){

    const [loading, setLoading] = useState(false);

    const startLoading = () => {setLoading(true)};
    const stopLoading = () => {setLoading(false)};

    return(
        <LoadingContext.Provider value={{loading, startLoading, stopLoading}}>
            {children}
        </LoadingContext.Provider>
    );
}