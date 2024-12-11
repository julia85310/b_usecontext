'use client';
import ThemeContext from "./Ejercicio1Contexto";
import { useContext } from "react";


export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", 
    color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
      <h1>Ejercicio 1</h1>
      <h2>El tema actual es: {theme}</h2>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <h1>Ejercicio 2</h1>
      <h1>Ejercicio 3</h1>
      <h1>Ejercicio 4</h1>
      <h1>Ejercicio 5</h1>
      <h1>Ejercicio 6</h1>
      <h1>Ejercicio 7</h1>
      <h1>Ejercicio 8</h1>
    </div>
  );
}
