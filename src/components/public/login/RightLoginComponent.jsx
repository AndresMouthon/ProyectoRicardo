import React from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../../assets/css/public/login/RightLoginComponent.css';
import { CUSTOMERRUTAS, PATHS, PUBLICRUTAS } from '../../../models/RoutesModels';

export default function RightLoginComponent() {
  return (
    <section className="login">
      <h1>Terminal de transporte</h1>
      <fieldset className="input-group">
        <label form="user"><FaUser className='icon' /> Usuario</label>
        <input type="text" name="usuario" placeholder="Ingresa tu usuario..." />
      </fieldset>
      <fieldset className="input-group">
        <label form="user"><FaLock className='icon' /> Contraseña</label>
        <input type="password" name="clave" placeholder="Ingresa tu contraseña..." />
      </fieldset>
      <Link to={PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HOME} className='link'>
        <button type="submit" className="btn-login">Iniciar sesion</button>
      </Link>
      <Link to={PUBLICRUTAS.REGISTRO} className="registrarse">¡Registrate aqui!</Link><br></br>
    </section>
  )
}
