import PermissionsContext from "./PermissionsContext";
import { useContext } from "react";

export default function AdminPanel(){

    const {permissions, fetchPermissions} = useContext(PermissionsContext);
    return (
        permissions.admin && 
            <div>
                Panel de administrador 
                <button onClick={fetchPermissions}>Actualizar Permisos</button>
            </div>
        
    );
}