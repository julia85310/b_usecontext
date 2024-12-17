'use client';
import ThemeContext from "./ThemeContext";
import { useContext, useState } from "react";
import AuthContext from './AuthContext';
import LanguageContext from "./LanguageContext";
import Cart from './Cart';
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import NotificationList from "./NotificationList";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";
import LoadingButton from "./LoadingButton";
export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {user, login, logout} = useContext(AuthContext);
  const [userInput, setUserInput] = useState('');
  const { language, setLanguage} = useContext(LanguageContext);
  const {settings} = useContext(SettingsContext);

  
  return (
    <div style={{ 
      backgroundColor: theme === "light" ? "#fff" : "#333", 
      color: theme === "light" ? "#000" : "#fff"}}>
      
      <h1>Ejercicio 1</h1><br></br>

      <h2>El tema actual es: {theme}</h2>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      
      <br></br><h1>Ejercicio 2</h1><br></br>

      {user.nombre == null? 
        <div>
          <input value={userInput} onChange={(e) => {setUserInput(e.target.value)}} placeholder="user"></input>
          <button onClick={() => login(userInput)}>Iniciar Sesion</button>
        </div> :
        <div>
          <p>Hola, {userInput}</p>
          <button onClick={logout}>Cerrar Sesion</button>
        </div>
      }
      
      <br></br><h1>Ejercicio 3</h1><br></br>
      <button onClick={ () => {language == 'es'? setLanguage('en') : setLanguage('es')}}>
        {language == 'es'?
        'Cambiar idioma': 'Change Language'}
      </button>

      <br></br><h1>Ejercicio 4</h1><br></br>

      <ProductList></ProductList>
      <Cart></Cart>

      <br></br><h1>Ejercicio 5</h1><br></br>

      <AdminPanel></AdminPanel>

      <br></br><h1>Ejercicio 6</h1><br></br>

      {settings.notifications && <NotificationList></NotificationList>}

      <br></br><h1>Ejercicio 7</h1><br></br>
          
      <Settings></Settings> 

      <br></br><h1>Ejercicio 8</h1>

      <LoadingButton></LoadingButton>
    </div>
  );
}
