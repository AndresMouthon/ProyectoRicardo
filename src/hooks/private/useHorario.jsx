import axios from 'axios';
import { useEffect, useState } from 'react';
import { APIUSER } from '../../models/EnpointsModels';

export default function useHorario(id) {

    const [horariosReserva, setHorariosReserva] = useState([]);

    const BuscarHorariosReserva = async () => {
        if (id !== undefined) {
            const response = await axios.get(
                APIUSER.RESERVATIONTIMES + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            if (response.status === 404) {
                console.log("No hay horarios disponibles");
            } else {
                setHorariosReserva(response.data)
            }
        };
    }

    useEffect(() => {
        BuscarHorariosReserva();
    }, []);

    return {
        horariosReserva,
    }
}
