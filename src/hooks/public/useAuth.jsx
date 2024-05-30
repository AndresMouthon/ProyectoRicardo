import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { APIAUTH } from "../../models/EnpointsModels";
import { CUSTOMERRUTAS, PATHS, PUBLICRUTAS } from "../../models/RoutesModels";

export default function useAuth() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [usuario, setUsuario] = useState({
        cedula: "",
        apellido: "",
        clave: "",
        usuario: "",
        nombre: "",
    });

    const recargar = () => {
        setUsuario({
            cedula: "",
            apellido: "",
            clave: "",
            usuario: "",
            nombre: "",
        });
    };

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value,
        });
    };

    const iniciarSesion = async () => {
        setLoading(true);
        delete usuario.cedula;
        delete usuario.apellido;
        delete usuario.nombre;
        try {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post(APIAUTH.LOGIN, usuario, options);

            if (response.data.status) {
                localStorage.setItem("token", response.data.token);
                response.data.usuario.clave = "Privado";
                localStorage.setItem("usuario", JSON.stringify(response.data.usuario));

                recargar();

                Swal.fire({
                    icon: "success",
                    title: "Bienvenido!",
                    showConfirmButton: false,
                    timer: 1000,
                });

                setLoading(false);

                navigate(PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HOME);
            } else {
                Swal.fire({
                    icon: "warning",
                    text: "Datos incorrectos...",
                    showConfirmButton: false,
                    timer: 1000,
                });
                setLoading(false);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "¡Error!",
                text: "Datos incorrectos...",
                showConfirmButton: false,
                timer: 1000,
            });
            setLoading(false);
            console.log("Credenciales incorrectas");
        }
    };

    const registrarUsuario = async () => {
        if (
            usuario.cedula === "" ||
            usuario.apellido === "" ||
            usuario.clave === "" ||
            usuario.usuario === "" ||
            usuario.nombre === ""
        ) {
            Swal.fire({
                icon: "info",
                title: "¡Cuidado!",
                text: "Todos los campos son obligatorios...",
                showConfirmButton: false,
                timer: 1000,
            });
        } else {
            setLoading(true);
            try {
                const options = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const response = await axios.post(APIAUTH.REGISTER, usuario, options);
                if (response.data) {
                    Swal.fire({
                        icon: "success",
                        title: "¡Cuenta creada con exito!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    setLoading(false);
                    navigate(PUBLICRUTAS.LOGIN);
                } else {
                    console.log(response.data);
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "¡Error!",
                    text: `${error.response.data}`,
                    showConfirmButton: false,
                    timer: 2000,
                });
                setLoading(false);
            }
        }
    };

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        navigate(PUBLICRUTAS.LOGIN);
    };

    return {
        handleChange,
        iniciarSesion,
        cerrarSesion,
        registrarUsuario,
        loading,
    };
}
