import { useContext } from "react"
import NotificationContext from './Ejercicio6';

export default function NotificationList(){
    const {notifications, removeNotification} = useContext(NotificationContext);
    return <div style={{
        position: "fixed", 
        top: "0",
        right: '0',
        zIndex: 1000     
    }}>
        <ul>
            {notifications.map( notification =>
            <li key={notification.id}>
                {notification.mensaje}
                <button onClick={() => removeNotification(notification)}>x</button>
            </li>)}
        </ul>
    </div>
}