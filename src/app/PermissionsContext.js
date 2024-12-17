'use client';
import {useState, createContext, useEffect, useContext} from 'react';
import LoadingContext from './LoadingContext';
import Spinner from './Spinner';

const PermissionsContext = createContext();

export default PermissionsContext;

export function PermissionsProvider({children}){

    const [permissions, setPermissions] = useState({ admin: true, canEdit: false });
    const {loading, startLoading, stopLoading} = useContext(LoadingContext);
 
    function fetchPermissions(){
        startLoading();
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
            //ejemplo
                setPermissions({ admin: true, canEdit: false });
            })
            .catch((error) => {
            console.error('Error al actualizar los permisos: ' + error);
            })
            .finally(() => {
                stopLoading();  
            });
            
    }

    useEffect(() => fetchPermissions, []); 
   

    return (
        <PermissionsContext.Provider value={{permissions, fetchPermissions}}>
            {loading? <Spinner></Spinner>: children}
        </PermissionsContext.Provider>
    );
}