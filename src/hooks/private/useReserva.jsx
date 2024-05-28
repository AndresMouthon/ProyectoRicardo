import { useEffect, useState } from "react";

export default function useReserva(id) {
  
  const [reservasLocalStorage, setReservasLocalStorage] = useState([]);
  const [reservaLocalStorage, setReservaLocalStorage] = useState({});

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
      setReservaLocalStorage(reserva.find((reserva) => Number(reserva.codigo) === Number(id) && Number(reserva.cedula) === Number(cedula)));
    }
  };

  useEffect(() => {
    obtenerReservaClienteLocalStorage();
    BuscarReservaLocalStorage();
  }, []);

  return {
    agregarReservaLocalStorage,
    borrarReservaLocalStorage,
    BuscarReservaLocalStorage,
    reservasLocalStorage,
    reservaLocalStorage,
  };
}
