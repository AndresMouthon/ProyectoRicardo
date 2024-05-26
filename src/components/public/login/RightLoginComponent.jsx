import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../../assets/css/public/login/RightLoginComponent.css';
import useAuth from '../../../hooks/public/useAuth';
import { PUBLICRUTAS } from '../../../models/RoutesModels';

export default function RightLoginComponent() {
  const { handleChange, iniciarSesion } = useAuth();
  return (
    <section className="login">
      <h1>Terminal de transporte</h1>
      <fieldset className="input-group">
        <label form="user"><FaUser className='icon' /> Usuario</label>
        <input type="text" name="usuario" placeholder="Ingresa tu usuario..." onChange={handleChange} required />
      </fieldset>
      <fieldset className="input-group">
        <label form="user"><FaLock className='icon' /> Contraseña</label>
        <input type="password" name="clave" placeholder="Ingresa tu contraseña..." onChange={handleChange} required />
      </fieldset>
      <button onClick={iniciarSesion} className="btn-login">Iniciar sesion</button>
      <Link to={PUBLICRUTAS.REGISTRO} className="registrarse">¡Registrate aqui!</Link><br></br>
    </section>
  )
}
