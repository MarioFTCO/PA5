import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ Usuario: "", Clave: "" });
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/Api/Usuario/login', {
        Usuario: credentials.Usuario,
        Clave: credentials.Clave
      });
      if (response.status === 200) {
        navigate("/home", { replace: true, state: { logged: true, Usuario: credentials.Usuario } });
        alert("Inicio de sesión exitoso");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.log(error);
      alert("Error en el inicio de sesión");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={onLogin}>
          <h1>Iniciar Sesión</h1>
          <input
            type="text"
            className="Usuario"
            placeholder="Usuario"
            name="Usuario"
            value={credentials.Usuario}
            onChange={handleChange}
          />
          <input
            type="password"
            className="Clave"
            placeholder="Clave"
            name="Clave"
            value={credentials.Clave}
            onChange={handleChange}
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;