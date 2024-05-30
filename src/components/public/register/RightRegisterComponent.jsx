import React from 'react';
import { FaKeyboard, FaLock, FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/public/useAuth';
import { PUBLICRUTAS } from '../../../models/RoutesModels';
import Spiner from '../../../utils/tools/Spiner';

export default function RightRegisterComponent() {

    const { handleChange, registrarUsuario, loading } = useAuth();

    return (
        <section className="login"><br />
            <fieldset className="input-group">
                <label form="user"><HiIdentification className='icon' /> Cedula</label>
                <input type="number" name="cedula" placeholder="Ingresa tu cedula..." onChange={handleChange} required />
            </fieldset>
            <fieldset className="input-group">
                <label form="nombre"><FaKeyboard className='icon' /> Nombres</label>
                <input type="text" name="nombre" placeholder="Ingresa tu nombre..." onChange={handleChange} required />
            </fieldset>
            <fieldset className="input-group">
                <label form="apellido"><FaKeyboard className='icon' /> Apellidos</label>
                <input type="text" name="apellido" placeholder="Ingresa tus apellidos..." onChange={handleChange} required />
            </fieldset>
            <fieldset className="input-group">
                <label form="usuario"><FaUser className='icon' /> Usuario</label>
                <input type="text" name="usuario" placeholder="Ej. andres@mandosed.com" onChange={handleChange} required />
            </fieldset>
            <fieldset className="input-group">
                <label form="clave"><FaLock className='icon' /> Contraseña</label>
                <input type="password" name="clave" placeholder="Ingresa tu contraseña..." onChange={handleChange} required />
            </fieldset>
            <button type="submit" className="btn-login" onClick={registrarUsuario}>{loading ? <Spiner /> : "Registrar"}</button>
            <Link to={PUBLICRUTAS.LOGIN} className="registrarse">¡Iniciar sesion!</Link><br />
        </section>
    )
}