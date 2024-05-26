import React, { useEffect, useState } from 'react'
import { APIUSER } from '../../models/EnpointsModels';
import axios from 'axios';

export default function useViaje() {

    const [viajes, setViajes] = useState([]);

    const getViajes = () => {
        axios
            .get(APIUSER.TRAVELS, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                setViajes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getViajes();
    }, []);

    return {
        viajes,
        setViajes
    }
}
