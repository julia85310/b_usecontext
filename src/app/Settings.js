import { useContext, useState } from "react";
import SettingsContext from "./Ejercicio7";
export default function Settings (){
    const {settings, updateSetting} = useContext(SettingsContext);
    const [inputNotifications, setInputNotifications] = useState(settings.notifications);
    const [inputDarkMode, setInputDarkMode] = useState(settings.darkMode);

    return <div>
        <h2>Configuración</h2>
        <input type="checkbox" value={inputNotifications} checked onChange={(e) => {
            setInputNotifications(e.target.checked);
            updateSetting('notifications', e.target.checked);
        }}></input>Notificaciones activadas <br></br>
        <input type="checkbox" value={inputDarkMode} onChange={(e) => {
            setInputDarkMode(e.target.checked);
            updateSetting('darkMode', e.target.checked);
        }}></input>Modo Oscuro
    </div>
}