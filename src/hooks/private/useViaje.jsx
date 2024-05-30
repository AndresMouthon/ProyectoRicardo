import axios from "axios";
import { useEffect, useState } from "react";
import { APIUSER } from "../../models/EnpointsModels";

export default function useViaje() {

    const [viajes, setViajes] = useState([]);
    const [loading, setLoading] = useState(false);

    const getViajes = () => {
        setLoading(true);
        axios
            .get(APIUSER.TRAVELS, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                setViajes(response.data);
                setLoading(false);
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
        loading,
        setViajes,
    };
}
