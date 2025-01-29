import { useContext, useEffect, useState } from "react";
import SettingsContext from "./SettingsContext";
import ThemeContext from "./ThemeContext";
export default function Settings (){
    const {settings, updateSetting} = useContext(SettingsContext);
    const [inputNotifications, setInputNotifications] = useState(settings.notifications);
    const [inputDarkMode, setInputDarkMode] = useState(settings.darkMode);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if(theme == 'dark'){
            setInputDarkMode(true);
        }else{
            setInputDarkMode(false);
        }
    }, [theme])

    return <div>
        <h2>Configuración</h2>
        <input type="checkbox" checked={inputNotifications} onChange={(e) => {
            setInputNotifications(e.target.checked);
            updateSetting('notifications', e.target.checked);
        }}></input>Notificaciones activadas <br></br>
        <input type="checkbox" checked={inputDarkMode} onChange={(e) => {
            setInputDarkMode(e.target.checked);
            updateSetting('darkMode', e.target.checked);
        }}></input>Modo Oscuro
    </div>
}