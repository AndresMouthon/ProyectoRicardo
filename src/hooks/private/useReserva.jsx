import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { APIUSER } from "../../models/EnpointsModels";
import { CUSTOMERRUTAS, PATHS } from "../../models/RoutesModels";

export default function useReserva(id) {

  const navigate = useNavigate();
  const [reservasLocalStorage, setReservasLocalStorage] = useState([]);
  const [reservaLocalStorage, setReservaLocalStorage] = useState({});
  const [historialReservas, setHistorialReservas] = useState([]);
  const [verReservaUsuario, setVerReservaUsuario] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const [reserva, setReserva] = useState({
    pasajeros: 0,
    idHorario: "",
    placa: "",
  });

  function handleChange({ target }) {
    setReserva({
      ...reserva,
      [target.name]: target.value,
    });
  }

  const obtenerReservasLocalStorage = () =>
    JSON.parse(localStorage.getItem("reservas")) || [];

  const agregarReservaLocalStorage = (viaje) => {
    const { cedula } = JSON.parse(localStorage.getItem("usuario"));
    const codigoViaje = viaje.codigo;
    let verificarExistenciaReserva = reservasLocalStorage.findIndex(
      (viaje) => viaje.codigo === codigoViaje && viaje.cedula === cedula
    );
    if (verificarExistenciaReserva !== -1) {
      Toastify({
        text: "Destino ya reservado",
        duration: 2000,
        position: "right",
        gravity: "top",
        style: {
          background: "white",
          color: "black",
        },
      }).showToast();
    } else {
      let reserva = obtenerReservasLocalStorage();
      const { codigo, ciudad, imagen, precio } = viaje;
      reserva.push({ cedula, codigo, ciudad, imagen, precio });
      localStorage.setItem("reservas", JSON.stringify(reserva));
      Toastify({
        text: "Viaje reservado correctamente",
        duration: 2000,
        position: "right",
        gravity: "top",
        style: {
          background: "white",
          color: "black",
        },
      }).showToast();
    }
    obtenerReservaClienteLocalStorage();
  };

  const obtenerReservaClienteLocalStorage = () => {
    const { cedula } = JSON.parse(localStorage.getItem("usuario"));
    let reserva = obtenerReservasLocalStorage();
    setReservasLocalStorage(reserva.filter((viaje) => viaje.cedula === cedula));
  };

  const borrarReservaLocalStorage = (codigo) => {
    let reserva = obtenerReservasLocalStorage();
    let { cedula } = JSON.parse(localStorage.getItem("usuario"));
    reserva = reserva.filter(
      (viaje) => !(viaje.codigo === codigo && viaje.cedula === cedula)
    );
    localStorage.setItem("reservas", JSON.stringify(reserva));
    Toastify({
      text: "Viaje eliminado de su reserva",
      duration: 2000,
      position: "right",
      gravity: "top",
      style: {
        background: "white",
        color: "black",
      },
    }).showToast();
    obtenerReservaClienteLocalStorage();
  };

  const BuscarReservaLocalStorage = () => {
    if (id !== undefined) {
      const { cedula } = JSON.parse(localStorage.getItem("usuario"));
      let reserva = obtenerReservasLocalStorage();
      setReservaLocalStorage(
        reserva.find(
          (reserva) =>
            Number(reserva.codigo) === Number(id) &&
            Number(reserva.cedula) === Number(cedula)
        )
      );
    }
  };

  const registrarReserva = async (cedula, codigoViaje) => {
    if (
      reserva.pasajeros === 0 ||
      reserva.idHorario === "" ||
      reserva.placa === ""
    ) {
      Swal.fire({
        icon: "info",
        title: "¡Cuidado!",
        text: "Todos los campos son obligatorios...",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      setLoadingButton(true);
      const nuevaReserva = {
        pasajeros: Number(reserva.pasajeros),
        horario: {
          idHorario: Number(reserva.idHorario),
        },
        usuario: {
          cedula: cedula,
        },
        viaje: {
          codigo: Number(codigoViaje),
        },
        transporte: {
          placa: reserva.placa,
        },
      };
      const response = await axios.post(
        APIUSER.CREATERESERVATION,
        nuevaReserva,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data === "¡Usted ya tiene un viaje para esa fecha!") {
        Swal.fire({
          icon: "warning",
          title: "¡Cuidado!",
          text: response.data,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/" + PATHS.CLIENTE + "/" + CUSTOMERRUTAS.HISTORY);
      } else {
        Swal.fire({
          icon: "success",
          title: "¡Reserva exitosa!",
          showConfirmButton: false,
          timer: 2000,
        });
        let reserva = obtenerReservasLocalStorage();
        let { cedula } = JSON.parse(localStorage.getItem("usuario"));
        reserva = reserva.filter(
          (viaje) => !(viaje.codigo === Number(codigoViaje) && viaje.cedula === cedula)
        );
        localStorage.setItem("reservas", JSON.stringify(reserva));
        navigate("/" + PATHS.CLIENTE + "/" + CUSTOMERRUTAS.TRAVELS);
      }
    }
  };

  const CargarHistorialReservasUsuario = async () => {
    setLoading(true);
    const { cedula } = JSON.parse(localStorage.getItem("usuario"));
    const response = await axios.get(APIUSER.HISTORYRESERVATIONS + cedula, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setLoading(false);
    if (response.data === "¡Usted no tiene reserva!") {
      console.log(response.data);
    } else {
      setHistorialReservas(response.data);
    }
  };

  const verReserva = (codigoViaje) => {
    for (let i = 0; i < historialReservas.length; i++) {
      if (historialReservas[i].codigo === Number(codigoViaje)) {
        setVerReservaUsuario(historialReservas[i]);
      }
    }
  }

  useEffect(() => {
    obtenerReservaClienteLocalStorage();
    BuscarReservaLocalStorage();
    CargarHistorialReservasUsuario();
  }, []);

  return {
    agregarReservaLocalStorage,
    borrarReservaLocalStorage,
    BuscarReservaLocalStorage,
    handleChange,
    registrarReserva,
    verReserva,
    verReservaUsuario,
    reservasLocalStorage,
    reservaLocalStorage,
    historialReservas,
    loading,
    loadingButton,
  };
}
