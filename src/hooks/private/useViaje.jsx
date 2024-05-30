import axios from "axios";
import { useEffect, useState } from "react";
import { APIUSER } from "../../models/EnpointsModels";

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
        setViajes,
    };
}
