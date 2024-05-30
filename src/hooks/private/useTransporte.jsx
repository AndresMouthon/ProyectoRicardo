import axios from "axios";
import { useEffect, useState } from "react";
import { APIUSER } from "../../models/EnpointsModels";

export default function useTransporte(id) {
  const [transporteViajes, setTransporteViajes] = useState([]);

  const BuscarTransporteReserva = async () => {
    if (id !== undefined) {
      const response = await axios.get(APIUSER.RESERVATIONTRANSPORT + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 404) {
        console.log("No hay horarios disponibles");
      } else {
        setTransporteViajes(response.data);
      }
    }
  };

  useEffect(() => {
    BuscarTransporteReserva();
  }, []);

  return {
    transporteViajes,
  };
}
