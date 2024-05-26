import React from 'react';
import { FaCity } from "react-icons/fa6";
import '../../../../assets/css/private/clients/travels/TravelsCardsClientComponent.css';
import { APIUSER } from '../../../../models/EnpointsModels';
import TravelsOptionsClientComponent from './TravelsOptionsClientComponent';

export default function TravelsCardsClientComponent({ viajes }) {
    return (
        <div className='cardContainer'>
            <div className="card">
                <TravelsOptionsClientComponent />
            </div>
            {viajes.map((viaje) => (
                <div className="card">
                    <section className='imgCity'>
                        <img src={APIUSER.RUTAFRONT + viaje.imagen} alt={APIUSER.RUTAFRONT + viaje.imagen} />
                    </section>
                    <section className='informationCity'>
                        <h1>{viaje.ciudad}</h1>
                        <span className='footerGroup'>
                            <p>$ {viaje.precio}</p>
                            <button>
                                <FaCity className="icon" />
                                Reservar
                            </button>
                        </span>
                    </section>
                </div>
            ))}
        </div>
    )
}
