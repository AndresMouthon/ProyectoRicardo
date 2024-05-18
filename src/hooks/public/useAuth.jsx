import React, { useState } from 'react'
import { APIAUTH } from '../../models/EnpointsModels';
import { CUSTOMERRUTAS, PATHS, PUBLICRUTAS } from '../../models/RoutesModels';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export default function useAuth() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        cedula: "",
        apellido: "",
        clave: "",
        usuario: "",
        contacto: "",
        nombre: "",
    });
    const recargar = () => {
        setUsuario({
            cedula: "",
            apellido: "",
            clave: "",
            usuario: "",
            contacto: "",
            nombre: "",
        });
    };
    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value,
        });
    }
    const iniciarSesion = async (e) => {
        delete usuario.cedula;
        delete usuario.apellido;
        delete usuario.contacto;
        delete usuario.nombre;
        try {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const response = await axios.post(APIAUTH.LOGIN, usuario, options);
            if (response.data.status) {
                localStorage.setItem("token", response.data.token);
                console.log(response.data.token);
                recargar();
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido!",
                    showConfirmButton: false,
                    timer: 1000,
                });
                navigate(PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HOME);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "¡Error!",
                    text: "Datos incorrectos...",
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "¡Error!",
                text: "Datos incorrectos...",
                showConfirmButton: false,
                timer: 1000,
            });
            console.log("Credenciales incorrectas");
        }
    }

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        navigate(PUBLICRUTAS.LOGIN);
    }

    return {
        handleChange,
        iniciarSesion,
        cerrarSesion,
    };
}
