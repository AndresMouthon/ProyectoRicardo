import React from 'react';
import { FaKeyboard, FaLock, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PUBLICRUTAS } from '../../../models/RoutesModels';

export default function RightRegisterComponent() {
    return (
        <section className="login"><br />
            <fieldset className="input-group">
                <label form="user"><FaKeyboard className='icon' /> Nombres</label>
                <input type="text" name="nombre" placeholder="Ingresa tu nombre..." />
            </fieldset>
            <fieldset className="input-group">
                <label form="user"><FaKeyboard className='icon' /> Apellidos</label>
                <input type="text" name="apellido" placeholder="Ingresa tu usuario..." />
            </fieldset>
            <fieldset className="input-group">
                <label form="user"><FaUser className='icon' /> Usuario</label>
                <input type="text" name="usuario" placeholder="Ingresa tu usuario..." />
            </fieldset>
            <fieldset className="input-group">
                <label form="user"><FaLock className='icon' /> Contraseña</label>
                <input type="password" name="clave" placeholder="Ingresa tu contraseña..." />
            </fieldset>
                <button type="submit" className="btn-login">Registrar</button>
            <Link to={PUBLICRUTAS.LOGIN} className="registrarse">¡Iniciar sesion!</Link><br />
        </section>
    )
}