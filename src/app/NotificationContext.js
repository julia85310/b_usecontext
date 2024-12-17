'use client';
import { createContext, useState } from "react";

const NotificationContext = createContext();
export default NotificationContext;

export function NotificationProvider({children}){
    const [notifications, setNotifications] = useState([]);

    function addNotification(mensaje){
        setNotifications([...notifications, {id: notifications.length, mensaje: mensaje}]);
    }

    function removeNotification(notification){
        setNotifications(
            notifications.filter(notificationFilter =>{ 
                if (notificationFilter.id != notification.id){
                    return notificationFilter;
                }
            })
        );
    }

    return (
        <NotificationContext.Provider value={{notifications, addNotification, removeNotification}}>
            {children}
        </NotificationContext.Provider>
    );
}