'use client';
import ThemeContext from "./Ejercicio1";
import { useContext, useState } from "react";
import AuthContext from './Ejercicio2';
import LanguageContext from "./Ejercicio3";
import Cart from './Cart';
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import NotificationList from "./NotificationList";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {user, login, logout} = useContext(AuthContext);
  const [userInput, setUserInput] = useState('');
  const { language, setLanguage} = useContext(LanguageContext);
  
  
  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", 
    color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
      
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

      <NotificationList></NotificationList>

      <br></br><h1>Ejercicio 7</h1><br></br>
      <br></br><h1>Ejercicio 8</h1>
    </div>
  );
}
