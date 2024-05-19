import React from "react"
import "./Login.css"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:4000/Api/Usuario/login', {user, password})
      console.log(response);
      if (response.status === 200) {
        alert("Inicio de sesión exitoso");
      }
      else {
        alert("Usuario o contraseña incorrectos");
      }
    }
      catch  (error) {
        console.log(error);
        
      }
    } 


  return (
    <div className="login-container">
      <div className="login-form" onSubmit={onLogin}>
        <form >
        <h1>Iniciar Sesión</h1>
        <input type="text" className="usuario" placeholder="Usuario" value={user} onChange={e => setUser(e.target.value) } required />
        <input type="password" className="clave" placeholder="Contraseña"  value={password} onChange={e => setPassword(e.target.value) } required />
        <button>Iniciar Sesión</button>
        </form>      
      </div>
    </div>
  );
}

export default Login
