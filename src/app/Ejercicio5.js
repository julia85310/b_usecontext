'use client';
import {useState, createContext, useEffect} from 'react';

const PermissionsContext = createContext();

export default PermissionsContext;

export function PermissionsProvider({children}){

    const [permissions, setPermissions] = useState({ admin: true, canEdit: false });

 
    function fetchPermissions(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
            //ejemplo
                setPermissions({ admin: true, canEdit: false });
            })
            .catch((error) => {
            console.error('Error al actualizar los permisos: ' + error);
            });
            
    }

    useEffect(() => fetchPermissions, []); 
   

    return (
        <PermissionsContext.Provider value={{permissions, fetchPermissions}}>
            {children}
        </PermissionsContext.Provider>
    );
}