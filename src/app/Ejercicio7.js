'use client';
import { createContext, useState} from "react";

const SettingsContext = createContext();

export function SettingsProvider({children}){

    const [settings, setSettings] = useState({
        notifications: true, darkMode:false
    });

    function updateSetting(setting, valor){
        setSettings({...settings, 
            setting: valor
        });
    }

    return (
        <SettingsContext.Provider value={{settings, updateSetting}}>
        {children}
        </SettingsContext.Provider>
    );
}