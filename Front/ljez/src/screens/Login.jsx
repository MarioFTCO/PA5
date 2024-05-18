import React from "react"
import "./Login.css"

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <form >
        <h1>Iniciar Sesión</h1>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Iniciar Sesión</button>
        </form>      
      </div>
    </div>
  );
}

export default Login
